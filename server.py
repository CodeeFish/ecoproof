from flask import Flask, jsonify, request

app = Flask(__name__)

response_headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
}


def normalize_indicators(product):
    indicators = product.get('indicators', [])
    if indicators:
        return indicators

    evidence = product.get('evidence', [])
    templates = {
        'certification': {'label': 'Third-party Certification', 'description': 'Verification of recognized standards such as EN 13432, FSC, or BPI.'},
        'certificateAuthenticity': {'label': 'Certificate Authenticity', 'description': 'Confirmation that certificate numbers exist and can be verified through official databases.'},
        'labTesting': {'label': 'Laboratory Testing', 'description': 'Publicly accessible lab testing supporting sustainability claims.'},
        'lca': {'label': 'Life Cycle Assessment', 'description': 'Published environmental life cycle assessment data comparing the product with conventional alternatives.'},
        'emissions': {'label': 'Carbon Emissions Transparency', 'description': 'Disclosure of Scope 1, 2, and 3 emissions data.'},
        'materialComposition': {'label': 'Material Composition Disclosure', 'description': 'Clear identification of raw materials and percentages of renewable, recycled, or conventional inputs.'},
        'endOfLife': {'label': 'End-of-Life Information', 'description': 'Clear disposal, recycling, or composting guidance.'},
        'audit': {'label': 'Independent Third-Party Audit', 'description': 'Verification that environmental claims have been reviewed or audited by an independent body.'},
        'marketing': {'label': 'Marketing Language Assessment', 'description': 'Identification of vague or potentially misleading claims lacking measurable support.'},
        'docs': {'label': 'Supporting Documentation', 'description': 'Availability of reports, EPDs, lab reports, or technical documentation.'}
    }

    return [
        [item.get('status', 'missing'), templates.get(item.get('key', ''), {}).get('label', item.get('label', item.get('key', 'Evidence'))), item.get('description', templates.get(item.get('key', ''), {}).get('description', ''))]
        for item in evidence
    ]


def build_fallback_explanation(product):
    indicators = normalize_indicators(product)
    ok_count = sum(1 for status, _, _ in indicators if status == 'ok')
    partial_count = sum(1 for status, _, _ in indicators if status == 'partial')
    missing_count = sum(1 for status, _, _ in indicators if status == 'missing')

    verdict = product.get('verdictLabel', 'Insufficient Evidence')
    strongest = [name for status, name, _ in indicators if status == 'ok'][:3]
    weakest = [name for status, name, _ in indicators if status == 'missing'][:3]

    if 'Verified Evidence' in verdict or 'green' in product.get('verdict', ''):
        base = f"This product received a strong evidence-based verdict because it has {ok_count} verified indicators and only {partial_count} partially supported areas."
    elif 'Insufficient Evidence' in verdict or 'amber' in product.get('verdict', ''):
        base = f"This product received an amber verdict because it has {ok_count} verified indicators, but {missing_count} critical evidence points are still missing."
    else:
        base = f"This product received a cautionary verdict because {missing_count} key evidence areas were not found, even though {ok_count} signals were present."

    if strongest:
        base += f" Its strongest evidence includes {', '.join(strongest)}."
    if weakest:
        base += f" The most important gaps are {', '.join(weakest)}."

    return base


@app.route('/api/explain', methods=['POST', 'OPTIONS'])
def explain():
    if request.method == 'OPTIONS':
        return ('', 204, response_headers)

    body = request.get_json(silent=True, force=True) or {}
    product = body.get('product', {})
    if not product:
        return jsonify({'explanation': 'No product data supplied.'}), 200, response_headers

    explanation = build_fallback_explanation(product)
    return jsonify({'explanation': explanation}), 200, response_headers


if __name__ == '__main__':
    print('EcoProof server running with fallback explanations only.')
    app.run(host='0.0.0.0', port=5000, debug=True)

