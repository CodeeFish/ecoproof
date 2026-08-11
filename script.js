const EVIDENCE_TEMPLATES = {
  certification: {
    label: 'Third-party Certification',
    description: 'Verification of recognized standards such as EN 13432, FSC, or BPI.'
  },
  certificateAuthenticity: {
    label: 'Certificate Authenticity',
    description: 'Confirmation that certificate numbers exist and can be verified through official databases.'
  },
  labTesting: {
    label: 'Laboratory Testing',
    description: 'Publicly accessible lab testing supporting sustainability claims.'
  },
  lca: {
    label: 'Life Cycle Assessment',
    description: 'Published environmental life cycle assessment data comparing the product with conventional alternatives.'
  },
  emissions: {
    label: 'Carbon Emissions Transparency',
    description: 'Disclosure of Scope 1, 2, and 3 emissions data.'
  },
  materialComposition: {
    label: 'Material Composition Disclosure',
    description: 'Clear identification of raw materials and percentages of renewable, recycled, or conventional inputs.'
  },
  endOfLife: {
    label: 'End-of-Life Information',
    description: 'Clear disposal, recycling, or composting guidance.'
  },
  audit: {
    label: 'Independent Third-Party Audit',
    description: 'Verification that environmental claims have been reviewed or audited by an independent body.'
  },
  marketing: {
    label: 'Marketing Language Assessment',
    description: 'Identification of vague or potentially misleading claims lacking measurable support.'
  },
  docs: {
    label: 'Supporting Documentation',
    description: 'Availability of reports, EPDs, lab reports, or technical documentation.'
  }
};

const DB = {
  "aqua danone indonesia": {
    name: 'AQUA (Danone Indonesia)',
    cat: 'Bottled water · Beverage',
    summary: 'This product received a low-risk verdict because it has strong public evidence for certification, authenticity, emissions disclosure, and supporting documentation.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'Verified sustainability certifications are publicly available.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'Certificate details can be verified through the issuing organization.' },
      { key: 'labTesting', status: 'not-evaluated', description: 'No laboratory testing was assessed in this prototype.' },
      { key: 'lca', status: 'not-evaluated', description: 'No lifecycle assessment data was assessed in this prototype.' },
      { key: 'emissions', status: 'ok', description: 'Sustainability and emissions information is publicly reported.' },
      { key: 'materialComposition', status: 'ok', description: 'Packaging materials are clearly disclosed.' },
      { key: 'endOfLife', status: 'ok', description: 'Recycling and bottle collection information is provided.' },
      { key: 'audit', status: 'ok', description: 'Sustainability reporting includes independent assurance.' },
      { key: 'marketing', status: 'ok', description: 'Environmental claims are specific and supported by evidence.' },
      { key: 'docs', status: 'ok', description: 'Sustainability reports and supporting documentation are available.' }
    ]
  },
  "sensatia botanicals": {
    name: 'Sensatia Botanicals',
    cat: 'Personal care · Beauty',
    summary: 'This product received a moderate-risk verdict because it has clear public evidence for some criteria, but limited transparency on emissions and audit information.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'Ethical and cruelty-free certifications are available.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'Certifications can be independently verified.' },
      { key: 'labTesting', status: 'not-evaluated', description: 'No laboratory testing was assessed in this prototype.' },
      { key: 'lca', status: 'not-evaluated', description: 'No lifecycle assessment data was assessed in this prototype.' },
      { key: 'emissions', status: 'partial', description: 'Limited public emissions information is available.' },
      { key: 'materialComposition', status: 'ok', description: 'Ingredients are clearly disclosed.' },
      { key: 'endOfLife', status: 'partial', description: 'Some packaging guidance is provided, but it is limited.' },
      { key: 'audit', status: 'partial', description: 'Limited publicly available sustainability audit information is present.' },
      { key: 'marketing', status: 'ok', description: 'Claims are mostly specific and supported.' },
      { key: 'docs', status: 'ok', description: 'Sustainability information is available on the company website.' }
    ]
  },
  "tessa tissue bio plastic packaging": {
    name: 'Tessa Tissue (Bio Plastic Packaging)',
    cat: 'Household paper goods',
    summary: 'This product received a high-risk verdict because it has limited public evidence for several sustainability criteria, even though it shows some certification and material disclosure.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'FSC® certification (C143747) is displayed on the official website.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'The FSC certificate can be verified through the official FSC certificate database.' },
      { key: 'labTesting', status: 'not-evaluated', description: 'No laboratory testing was assessed in this prototype.' },
      { key: 'lca', status: 'not-evaluated', description: 'No lifecycle assessment data was assessed in this prototype.' },
      { key: 'emissions', status: 'partial', description: 'No publicly available product-level carbon footprint or Scope 3 reporting was found.' },
      { key: 'materialComposition', status: 'ok', description: 'The company discloses 100% virgin pulp and bioplastic packaging.' },
      { key: 'endOfLife', status: 'partial', description: 'Packaging is described as biodegradable or environmentally friendly, but detailed disposal guidance is limited.' },
      { key: 'audit', status: 'partial', description: 'FSC certification provides third-party verification of responsible sourcing, but broader sustainability audits are not prominently disclosed.' },
      { key: 'marketing', status: 'partial', description: 'Uses claims such as “Bio Plastic” and “environmentally friendly packaging,” but supporting environmental evidence is relatively limited on the product page.' },
      { key: 'docs', status: 'partial', description: 'Product information is available, but comprehensive sustainability reports or environmental documentation are not readily available.' }
    ]
  },
  "verdanta compostable cups": {
    name: 'Verdanta Compostable Cups',
    cat: 'Food packaging · PLA-based',
    summary: 'This product received a strong evidence-based verdict because it has verified certifications, lab testing, and clear material disclosure.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'EN 13432 and BPI Certified Compostable both confirmed.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'Certificate number cross-checked against the official EN 13432 registry.' },
      { key: 'labTesting', status: 'ok', description: 'Independent lab report confirms industrial compostability within 90 days.' },
      { key: 'lca', status: 'partial', description: 'LCA summary published, but full methodology is not publicly available.' },
      { key: 'emissions', status: 'partial', description: 'Scope 1 and 2 disclosed; Scope 3 not reported.' },
      { key: 'materialComposition', status: 'ok', description: '100% PLA derived from corn starch, disclosed on packaging and website.' },
      { key: 'endOfLife', status: 'ok', description: 'Clear instructions: industrial composting facility required, not home compostable.' },
      { key: 'audit', status: 'ok', description: 'Audited annually by an accredited certification body.' },
      { key: 'marketing', status: 'ok', description: 'No vague claims detected; all statements map to certifications.' },
      { key: 'docs', status: 'ok', description: 'Sustainability report and EPD both available for download.' }
    ]
  },
  "pureleaf bamboo tissue": {
    name: 'PureLeaf Bamboo Tissue',
    cat: 'Household paper goods',
    summary: 'This product received an amber verdict because it has some credible sourcing evidence, but key testing and emissions details remain missing.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'FSC certification confirmed for bamboo sourcing.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'FSC license code verified against the official database.' },
      { key: 'labTesting', status: 'missing', description: 'No publicly accessible lab testing found for the chemical-free bleaching claim.' },
      { key: 'lca', status: 'missing', description: 'No published LCA comparing bamboo tissue to conventional paper.' },
      { key: 'emissions', status: 'missing', description: 'No Scope 1, 2, or 3 emissions data disclosed.' },
      { key: 'materialComposition', status: 'ok', description: '100% bamboo pulp, clearly stated.' },
      { key: 'endOfLife', status: 'ok', description: 'Labeled biodegradable and septic-safe.' },
      { key: 'audit', status: 'partial', description: 'FSC audits the sourcing, but manufacturing claims are unaudited.' },
      { key: 'marketing', status: 'partial', description: 'Chemical-free is used without a defined standard or threshold.' },
      { key: 'docs', status: 'missing', description: 'No sustainability report or EPD available on the company site.' }
    ]
  },
  "novawear ecoknit tee": {
    name: 'NovaWear EcoKnit Tee',
    cat: 'Apparel · Cotton blend',
    summary: 'This product received a cautionary verdict because its green claims are not backed by verifiable public evidence.',
    evidence: [
      { key: 'certification', status: 'missing', description: 'No recognized certification such as GOTS or OEKO-TEX was found.' },
      { key: 'certificateAuthenticity', status: 'missing', description: 'The EcoSafe logo does not match any certification registry.' },
      { key: 'labTesting', status: 'missing', description: 'No lab testing available for dye safety or water usage claims.' },
      { key: 'lca', status: 'missing', description: 'No LCA published.' },
      { key: 'emissions', status: 'missing', description: 'No emissions data disclosed at any scope.' },
      { key: 'materialComposition', status: 'partial', description: 'Blend percentage listed, but recycled-content source is unspecified.' },
      { key: 'endOfLife', status: 'missing', description: 'No guidance on recyclability or disposal.' },
      { key: 'audit', status: 'missing', description: 'No audit body named anywhere in company materials.' },
      { key: 'marketing', status: 'missing', description: '100% green and planet-safe are used with no measurable definition.' },
      { key: 'docs', status: 'missing', description: 'No sustainability report, EPD, or technical documentation found.' }
    ]
  },
  "beeswax candle": {
    name: 'Beeswax Candle',
    cat: 'Home goods · Candle',
    summary: 'This product received an amber verdict because it has credible sourcing information but limited public testing and emissions disclosure.',
    evidence: [
      { key: 'certification', status: 'partial', description: 'No third-party certification found, but the company lists responsible sourcing practices.' },
      { key: 'certificateAuthenticity', status: 'missing', description: 'No supporting certificate registry entry identified.' },
      { key: 'labTesting', status: 'missing', description: 'No lab testing publicly available for fragrance or burn safety claims.' },
      { key: 'lca', status: 'missing', description: 'No public LCA was found for the candle line.' },
      { key: 'emissions', status: 'partial', description: 'The company mentions emissions reduction goals but does not disclose quantified data.' },
      { key: 'materialComposition', status: 'ok', description: 'Primary ingredients and wax source are clearly described.' },
      { key: 'endOfLife', status: 'ok', description: 'Recycling guidance is provided for the packaging.' },
      { key: 'audit', status: 'partial', description: 'Supplier standards are described, but no independent audit evidence is public.' },
      { key: 'marketing', status: 'ok', description: 'Claims are mostly specific and linked to sourcing language rather than vague green branding.' },
      { key: 'docs', status: 'partial', description: 'A product sheet is available, but a full sustainability report is not linked.' }
    ]
  },
  "herbal deodorant": {
    name: 'Herbal Deodorant',
    cat: 'Personal care · Deodorant',
    summary: 'This product received a cautionary verdict because several sustainability claims are not supported by public certification or testing data.',
    evidence: [
      { key: 'certification', status: 'missing', description: 'No recognized certification found for the product line.' },
      { key: 'certificateAuthenticity', status: 'missing', description: 'No certificate number or registry entry could be verified.' },
      { key: 'labTesting', status: 'partial', description: 'Some safety statements are listed, but no public lab report is linked.' },
      { key: 'lca', status: 'missing', description: 'No published LCA or environmental footprint data found.' },
      { key: 'emissions', status: 'missing', description: 'No emissions disclosure available for the product.' },
      { key: 'materialComposition', status: 'ok', description: 'Ingredient breakdown and natural-origin claims are clearly stated.' },
      { key: 'endOfLife', status: 'partial', description: 'Packaging disposal guidance is limited to general recycling notes.' },
      { key: 'audit', status: 'missing', description: 'No independent audit or review is publicly documented.' },
      { key: 'marketing', status: 'partial', description: 'The phrase “natural” is used without a defined standard or supporting evidence.' },
      { key: 'docs', status: 'partial', description: 'Ingredient list is available, but technical documentation is incomplete.' }
    ]
  },
  "citrus shampoo": {
    name: 'Citrus Shampoo',
    cat: 'Personal care · Shampoo',
    summary: 'This product received a green verdict because it has public sourcing and packaging evidence, though some emissions and audit details remain partial.',
    evidence: [
      { key: 'certification', status: 'ok', description: 'The product lists a verified cruelty-free certification and an eco-label on packaging.' },
      { key: 'certificateAuthenticity', status: 'ok', description: 'The certificate number is listed and matches the issuing body website.' },
      { key: 'labTesting', status: 'partial', description: 'Safety data is available, but no full environmental lab report is linked.' },
      { key: 'lca', status: 'partial', description: 'A high-level sustainability summary is published, but a full LCA is not available.' },
      { key: 'emissions', status: 'partial', description: 'The company reports energy use improvements but not full product-level Scope 3 data.' },
      { key: 'materialComposition', status: 'ok', description: 'Ingredients and packaging materials are clearly disclosed.' },
      { key: 'endOfLife', status: 'ok', description: 'Instructions for bottle disposal and refill options are provided.' },
      { key: 'audit', status: 'ok', description: 'The company names an independent review body for its sourcing standards.' },
      { key: 'marketing', status: 'ok', description: 'Most environmental claims are specific and supported by available evidence.' },
      { key: 'docs', status: 'ok', description: 'A product FAQ and sustainability page are both available.' }
    ]
  }
};

const PRODUCT_TRANSLATIONS = {
  en: {
    "aqua danone indonesia": {
      name: 'AQUA (Danone Indonesia)',
      cat: 'Bottled water · Beverage',
      summary: 'This product received a low-risk verdict because it has strong public evidence for certification, authenticity, emissions disclosure, and supporting documentation.'
    },
    "sensatia botanicals": {
      name: 'Sensatia Botanicals',
      cat: 'Personal care · Beauty',
      summary: 'This product received a moderate-risk verdict because it has clear public evidence for some criteria, but limited transparency on emissions and audit information.'
    },
    "tessa tissue bio plastic packaging": {
      name: 'Tessa Tissue (Bio Plastic Packaging)',
      cat: 'Household paper goods',
      summary: 'This product received a high-risk verdict because it has limited public evidence for several sustainability criteria, even though it shows some certification and material disclosure.'
    },
    "verdanta compostable cups": {
      name: 'Verdanta Compostable Cups',
      cat: 'Food packaging · PLA-based',
      summary: 'This product received a strong evidence-based verdict because it has verified certifications, lab testing, and clear material disclosure.'
    },
    "pureleaf bamboo tissue": {
      name: 'PureLeaf Bamboo Tissue',
      cat: 'Household paper goods',
      summary: 'This product received an amber verdict because it has some credible sourcing evidence, but key testing and emissions details remain missing.'
    },
    "novawear ecoknit tee": {
      name: 'NovaWear EcoKnit Tee',
      cat: 'Apparel · Cotton blend',
      summary: 'This product received a cautionary verdict because its green claims are not backed by verifiable public evidence.'
    },
    "beeswax candle": {
      name: 'Beeswax Candle',
      cat: 'Home goods · Candle',
      summary: 'This product received an amber verdict because it has credible sourcing information but limited public testing and emissions disclosure.'
    },
    "herbal deodorant": {
      name: 'Herbal Deodorant',
      cat: 'Personal care · Deodorant',
      summary: 'This product received a cautionary verdict because several sustainability claims are not supported by public certification or testing data.'
    },
    "citrus shampoo": {
      name: 'Citrus Shampoo',
      cat: 'Personal care · Shampoo',
      summary: 'This product received a green verdict because it has public sourcing and packaging evidence, though some emissions and audit details remain partial.'
    }
  },
  id: {
    "aqua danone indonesia": {
      name: 'AQUA (Danone Indonesia)',
      cat: 'Air minum dalam kemasan · Minuman',
      summary: 'Produk ini menerima putusan berisiko rendah karena memiliki bukti publik yang kuat untuk sertifikasi, keaslian sertifikat, pengungkapan emisi, dan dokumentasi pendukung.'
    },
    "sensatia botanicals": {
      name: 'Sensatia Botanicals',
      cat: 'Perawatan pribadi · Kecantikan',
      summary: 'Produk ini menerima putusan berisiko menengah karena memiliki bukti publik yang jelas untuk beberapa kriteria, tetapi transparansi yang terbatas pada emisi dan informasi audit.'
    },
    "tessa tissue bio plastic packaging": {
      name: 'Tessa Tissue (Kemasan Plastik Bio)',
      cat: 'Produk kertas rumah tangga',
      summary: 'Produk ini menerima putusan berisiko tinggi karena bukti publik yang terbatas untuk beberapa kriteria keberlanjutan, meskipun menunjukkan beberapa sertifikasi dan pengungkapan material.'
    },
    "verdanta compostable cups": {
      name: 'Verdanta Compostable Cups',
      cat: 'Kemasan makanan · Berbasis PLA',
      summary: 'Produk ini menerima putusan berbasis bukti yang kuat karena memiliki sertifikasi terverifikasi, pengujian laboratorium, dan pengungkapan material yang jelas.'
    },
    "pureleaf bamboo tissue": {
      name: 'PureLeaf Bamboo Tissue',
      cat: 'Produk kertas rumah tangga',
      summary: 'Produk ini menerima putusan kuning karena memiliki beberapa bukti sumber yang kredibel, tetapi detail pengujian dan emisi utama masih belum ada.'
    },
    "novawear ecoknit tee": {
      name: 'NovaWear EcoKnit Tee',
      cat: 'Pakaian · Campuran kapas',
      summary: 'Produk ini menerima putusan hati-hati karena klaim hijau tidak didukung oleh bukti publik yang dapat diverifikasi.'
    },
    "beeswax candle": {
      name: 'Lilin Beeswax',
      cat: 'Perabot rumah · Lilin',
      summary: 'Produk ini menerima putusan kuning karena memiliki informasi sumber yang kredibel tetapi pengujian publik dan pengungkapan emisi yang terbatas.'
    },
    "herbal deodorant": {
      name: 'Deodorant Herbal',
      cat: 'Perawatan pribadi · Deodoran',
      summary: 'Produk ini menerima putusan hati-hati karena beberapa klaim keberlanjutan tidak didukung oleh sertifikasi publik atau data pengujian.'
    },
    "citrus shampoo": {
      name: 'Shampo Citrus',
      cat: 'Perawatan pribadi · Shampoo',
      summary: 'Produk ini menerima putusan hijau karena memiliki bukti sumber dan kemasan yang publik, meskipun beberapa detail emisi dan audit masih parsial.'
    }
  }
};

const EVIDENCE_TRANSLATIONS = {
  en: {
    certification: { label: 'Third-party Certification', description: 'Verification of recognized standards such as EN 13432, FSC, or BPI.' },
    certificateAuthenticity: { label: 'Certificate Authenticity', description: 'Confirmation that certificate numbers exist and can be verified through official databases.' },
    labTesting: { label: 'Laboratory Testing', description: 'Publicly accessible lab testing supporting sustainability claims.' },
    lca: { label: 'Life Cycle Assessment', description: 'Published environmental life cycle assessment data comparing the product with conventional alternatives.' },
    emissions: { label: 'Carbon Emissions Transparency', description: 'Disclosure of Scope 1, 2, and 3 emissions data.' },
    materialComposition: { label: 'Material Composition Disclosure', description: 'Clear identification of raw materials and percentages of renewable, recycled, or conventional inputs.' },
    endOfLife: { label: 'End-of-Life Information', description: 'Clear disposal, recycling, or composting guidance.' },
    audit: { label: 'Independent Third-Party Audit', description: 'Verification that environmental claims have been reviewed or audited by an independent body.' },
    marketing: { label: 'Marketing Language Assessment', description: 'Identification of vague or potentially misleading claims lacking measurable support.' },
    docs: { label: 'Supporting Documentation', description: 'Availability of reports, EPDs, lab reports, or technical documentation.' }
  },
  id: {
    certification: { label: 'Sertifikasi Pihak Ketiga', description: 'Verifikasi standar yang diakui seperti EN 13432, FSC, atau BPI.' },
    certificateAuthenticity: { label: 'Keaslian Sertifikat', description: 'Konfirmasi bahwa nomor sertifikat ada dan dapat diverifikasi melalui basis data resmi.' },
    labTesting: { label: 'Pengujian Laboratorium', description: 'Pengujian laboratorium yang dapat diakses publik untuk mendukung klaim keberlanjutan.' },
    lca: { label: 'Penilaian Siklus Hidup', description: 'Data penilaian siklus hidup lingkungan yang diterbitkan dan membandingkan produk dengan alternatif konvensional.' },
    emissions: { label: 'Transparansi Emisi Karbon', description: 'Pengungkapan data emisi Scope 1, 2, dan 3.' },
    materialComposition: { label: 'Pengungkapan Komposisi Material', description: 'Identifikasi yang jelas tentang bahan baku dan persentase input terbarukan, daur ulang, atau konvensional.' },
    endOfLife: { label: 'Informasi Akhir Masa Pakai', description: 'Panduan pembuangan, daur ulang, atau pengomposan yang jelas.' },
    audit: { label: 'Audit Pihak Ketiga Independen', description: 'Verifikasi bahwa klaim lingkungan telah ditinjau atau diaudit oleh badan independen.' },
    marketing: { label: 'Penilaian Bahasa Pemasaran', description: 'Identifikasi klaim yang kabur atau berpotensi menyesatkan yang tidak memiliki dukungan terukur.' },
    docs: { label: 'Dokumentasi Pendukung', description: 'Ketersediaan laporan, EPD, laporan lab, atau dokumentasi teknis.' }
  }
};

const VERDICT_TRANSLATIONS = {
  en: {
    highRisk: 'High Greenwashing Risk',
    verifiedEvidence: 'Verified Evidence',
    insufficientEvidence: 'Insufficient Evidence'
  },
  id: {
    highRisk: 'Risiko Greenwashing Tinggi',
    verifiedEvidence: 'Bukti Terverifikasi',
    insufficientEvidence: 'Bukti Tidak Cukup'
  }
};

const TRANSLATIONS = {
  en: {
    'nav.search': 'Search',
    'nav.learn': 'Learn Before You Believe',
    'nav.evidence': 'Evidence Network',
    'hero.badge': 'SDG 12 & SDG 13 · Learner Prototype',
    'hero.title': 'Don\'t trust the label.<br><em>Trace the evidence.</em>',
    'hero.subtitle': 'Search any product to see the certifications, lab tests, and disclosures behind its environmental claims — not just the marketing copy on the box.',
    'search.placeholder': 'Search a product name…',
    'search.button': 'Verify',
    'search.mode.name': 'Name Search',
    'search.mode.image': 'Upload Image',
    'search.demo.label': 'Try a demo product:',
    'video.title': 'Watch EcoProof in action',
    'video.subtitle': 'A quick demo of how to search, verify product claims, and inspect the evidence behind sustainability marketing.',
    'how.title': 'How to use EcoProof',
    'how.subtitle': 'Start with a product name, review the evidence score, and use the result to tell the difference between marketing claims and real verification.',
    'how.card1.tag': 'Search',
    'how.card1.title': 'Enter a product name',
    'how.card1.text': 'Type or paste the product and click Verify. The search is typo-tolerant and works with the demo product names.',
    'how.card2.tag': 'Review',
    'how.card2.title': 'Inspect the evidence',
    'how.card2.text': 'Compare certifications, lab results, and disclosures to see whether the claim is backed by clear, verifiable proof.',
    'how.link': 'See the Evidence Network →',
    'learn.badge': 'Education · Greenwashing Literacy',
    'learn.title': 'Learn Before You Believe',
    'learn.subtitle': 'Environmental claims can sound convincing without being verifiable. This page breaks down common tactics, what credible evidence looks like, and how to evaluate claims more carefully.',
    'learn.card1.title': 'What greenwashing looks like',
    'learn.card1.item1': 'Vague terms like “eco-friendly,” “natural,” or “planet-safe” without a measurable definition.',
    'learn.card1.item2': 'Self-made logos or symbols that look official but cannot be verified.',
    'learn.card1.item3': 'Highlighting one positive detail while hiding the broader environmental impact.',
    'learn.card2.title': 'What strong evidence looks like',
    'learn.card2.item1': 'Recognized certifications such as Ekolabel Indonesia, EN 13432, FSC, BPI, or similar third-party standards.',
    'learn.card2.item2': 'Publicly accessible lab reports, sustainability reports, or Environmental Product Declarations.',
    'learn.card2.item3': 'Clear disclosures around materials, sourcing, disposal, and emissions.',
    'learn.card3.title': 'How to question a claim',
    'learn.card3.text': 'Ask three things before trusting a sustainability claim: Can it be verified, who verified it, and is the evidence public?',
    'learn.card3.item1': '✔ Is there a certificate number or registry entry?',
    'learn.card3.item2': '✔ Is there a lab report or technical document?',
    'learn.card3.item3': '✔ Does the company explain the full product lifecycle?',
    'learn.card4.title': 'Common red flags',
    'learn.card4.item1': 'Claims that are broad, emotional, or visually persuasive without proof.',
    'learn.card4.item2': 'No named certification body, no document link, and no public evidence trail.',
    'learn.card4.item3': 'Repeated use of “green” language without details about what is being measured.',
    'learn.card5.title': 'Why EcoProof exists',
    'learn.card5.text': 'EcoProof helps users move from marketing language to measurable evidence. The goal is not to replace judgment, but to make evidence easier to find and compare.',
    'evidence.badge': 'Evidence Network · Coming Soon',
    'evidence.title': 'Evidence Network',
    'evidence.subtitle': 'We’re building a simple, expandable network of evidence that connects product claims to certifications, lab reports, and third-party disclosure records.',
    'evidence.panelTitle': 'Why this page matters',
    'evidence.panelSub': 'A true evidence network should let users trace a claim back to its source, not just trust the label. This placeholder is the first step toward that vision.',
    'evidence.card1.title': 'Verified sources',
    'evidence.card1.text': 'Certificates, lab tests, and registries will be grouped here so users can follow the proof behind each claim.',
    'evidence.card2.title': 'Product evidence links',
    'evidence.card2.text': 'Future expansion will show how products connect to common standards and third-party verifications.',
    'evidence.card3.title': 'Search-ready structure',
    'evidence.card3.text': 'The evidence network will be easy to grow by adding new products, indicators, and verified documents.',
    'evidence.card4.title': 'Designed for handoff',
    'evidence.card4.text': 'This page is intentionally simple so the project can expand cleanly with new dataset categories or interactive visuals.',
    'evidence.note': '<strong>Note:</strong> This is a placeholder page showing the future direction of the Evidence Network and might be expanded later with real data, charts, maps, or a searchable database.',
    'footer.text': 'ECOPROOF PROTOTYPE — DUMMY DATA FOR DEMONSTRATION ONLY',
    'result.summaryLabel': 'Why this result?',
    'result.loading': 'Generating an evidence-based explanation…',
    'result.breakdownTitle': 'Evidence Breakdown',
    'result.breakdownSub': 'Every indicator traces back to a public source — nothing here is AI opinion.',
    'result.noMatchTitle': 'No match in the demo database',
    'result.noMatchText': 'Try one of the sample products below the search bar — this prototype runs on a small dummy dataset.',
    'result.closestMatch': 'Showing closest match for "{query}" from the demo database.'
  },
  id: {
    'nav.search': 'Cari',
    'nav.learn': 'Pelajari Sebelum Percaya',
    'nav.evidence': 'Jaringan Bukti',
    'hero.badge': 'SDG 12 & SDG 13 · Prototipe Pelajar',
    'hero.title': 'Jangan percaya label.<br><em>Lacak bukti.</em>',
    'hero.subtitle': 'Cari produk apa pun untuk melihat sertifikasi, uji laboratorium, dan pengungkapan di balik klaim lingkungan — bukan hanya copy pemasaran di kemasan.',
    'search.placeholder': 'Cari nama produk…',
    'search.button': 'Periksa',
    'search.mode.name': 'Pencarian Nama',
    'search.mode.image': 'Unggah Gambar',
    'search.demo.label': 'Coba produk demo:',
    'video.title': 'Lihat EcoProof bekerja',
    'video.subtitle': 'Demo singkat tentang cara mencari, memverifikasi klaim produk, dan memeriksa bukti di balik pemasaran keberlanjutan.',
    'how.title': 'Cara menggunakan EcoProof',
    'how.subtitle': 'Mulai dengan nama produk, tinjau skor bukti, dan gunakan hasilnya untuk membedakan klaim pemasaran dari verifikasi yang sebenarnya.',
    'how.card1.tag': 'Cari',
    'how.card1.title': 'Masukkan nama produk',
    'how.card1.text': 'Ketik atau tempel produk lalu klik Periksa. Pencarian ini tahan salah ketik dan bekerja dengan nama produk demo.',
    'how.card2.tag': 'Tinjau',
    'how.card2.title': 'Periksa bukti',
    'how.card2.text': 'Bandingkan sertifikasi, hasil uji laboratorium, dan pengungkapan untuk melihat apakah klaim tersebut didukung bukti yang jelas dan dapat diverifikasi.',
    'how.link': 'Lihat Jaringan Bukti →',
    'learn.badge': 'Edukasi · Literasi Greenwashing',
    'learn.title': 'Pelajari Sebelum Percaya',
    'learn.subtitle': 'Klaim lingkungan bisa terdengar meyakinkan tanpa bisa diverifikasi. Halaman ini menjelaskan taktik umum, seperti apa bukti yang kredibel, dan cara mengevaluasi klaim dengan lebih hati-hati.',
    'learn.card1.title': 'Seperti apa greenwashing terlihat',
    'learn.card1.item1': 'Istilah kabur seperti “ramah lingkungan,” “alami,” atau “aman bagi planet” tanpa definisi yang terukur.',
    'learn.card1.item2': 'Logo atau simbol buatan sendiri yang tampak resmi tetapi tidak bisa diverifikasi.',
    'learn.card1.item3': 'Menonjolkan satu detail positif sambil menyembunyikan dampak lingkungan yang lebih luas.',
    'learn.card2.title': 'Seperti apa bukti kuat terlihat',
    'learn.card2.item1': 'Sertifikasi yang diakui seperti Ekolabel Indonesia, EN 13432, FSC, BPI, atau standar pihak ketiga serupa.',
    'learn.card2.item2': 'Laporan uji laboratorium, laporan keberlanjutan, atau Environmental Product Declaration yang dapat diakses publik.',
    'learn.card2.item3': 'Pengungkapan yang jelas mengenai material, sumber, pembuangan, dan emisi.',
    'learn.card3.title': 'Cara mempertanyakan suatu klaim',
    'learn.card3.text': 'Tanyakan tiga hal sebelum mempercayai klaim keberlanjutan: Apakah bisa diverifikasi, siapa yang memverifikasinya, dan apakah bukti tersebut publik?',
    'learn.card3.item1': '✔ Apakah ada nomor sertifikat atau entri registri?',
    'learn.card3.item2': '✔ Apakah ada laporan laboratorium atau dokumen teknis?',
    'learn.card3.item3': '✔ Apakah perusahaan menjelaskan siklus hidup produk secara lengkap?',
    'learn.card4.title': 'Tanda bahaya umum',
    'learn.card4.item1': 'Klaim yang luas, emosional, atau persuasif secara visual tanpa bukti.',
    'learn.card4.item2': 'Tidak ada badan sertifikasi yang disebutkan, tidak ada tautan dokumen, dan tidak ada jejak bukti publik.',
    'learn.card4.item3': 'Penggunaan bahasa “hijau” berulang tanpa rincian tentang apa yang diukur.',
    'learn.card5.title': 'Mengapa EcoProof ada',
    'learn.card5.text': 'EcoProof membantu pengguna beralih dari bahasa pemasaran ke bukti yang terukur. Tujuannya bukan untuk menggantikan penilaian, tetapi membuat bukti lebih mudah ditemukan dan dibandingkan.',
    'evidence.badge': 'Jaringan Bukti · Segera Hadir',
    'evidence.title': 'Jaringan Bukti',
    'evidence.subtitle': 'Kami sedang membangun jaringan bukti yang sederhana dan dapat diperluas, yang menghubungkan klaim produk dengan sertifikasi, laporan laboratorium, dan catatan pengungkapan pihak ketiga.',
    'evidence.panelTitle': 'Mengapa halaman ini penting',
    'evidence.panelSub': 'Jaringan bukti yang sesungguhnya harus memungkinkan pengguna melacak klaim kembali ke sumbernya, bukan hanya mempercayai label. Placeholder ini adalah langkah pertama menuju visi tersebut.',
    'evidence.card1.title': 'Sumber yang terverifikasi',
    'evidence.card1.text': 'Sertifikat, uji laboratorium, dan registri akan dikelompokkan di sini sehingga pengguna dapat mengikuti bukti di balik setiap klaim.',
    'evidence.card2.title': 'Tautan bukti produk',
    'evidence.card2.text': 'Ekspansi di masa depan akan menunjukkan bagaimana produk terhubung ke standar umum dan verifikasi pihak ketiga.',
    'evidence.card3.title': 'Struktur siap pencarian',
    'evidence.card3.text': 'Jaringan bukti akan mudah berkembang dengan menambahkan produk, indikator, dan dokumen terverifikasi baru.',
    'evidence.card4.title': 'Dirancang untuk penyerahan',
    'evidence.card4.text': 'Halaman ini sengaja dibuat sederhana agar proyek dapat berkembang dengan kategori dataset baru atau visual interaktif.',
    'evidence.note': '<strong>Catatan:</strong> Ini adalah halaman placeholder yang menunjukkan arah masa depan Jaringan Bukti dan mungkin dikembangkan nanti dengan data nyata, bagan, peta, atau basis data yang dapat dicari.',
    'footer.text': 'PROTOTIPE ECOPROOF — DATA PALSU UNTUK DEMONSTRASI SAJA',
    'chat.title': 'Referensi Obrolan',
    'chat.body': 'Widget ini hanya placeholder; gunakan ini nanti untuk catatan dan referensi singkat.',
    'chat.openLabel': 'Buka obrolan',
    'chat.closeLabel': 'Tutup obrolan',
    'result.summaryLabel': 'Mengapa hasil ini?',
    'result.loading': 'Membuat penjelasan berbasis bukti…',
    'result.breakdownTitle': 'Rincian Bukti',
    'result.breakdownSub': 'Setiap indikator kembali ke sumber publik — ini bukan opini AI.',
    'result.noMatchTitle': 'Tidak ada kecocokan dalam database demo',
    'result.noMatchText': 'Coba salah satu produk contoh di bawah bilah pencarian — prototipe ini berjalan dengan dataset tiruan kecil.',
    'result.closestMatch': 'Menampilkan kecocokan terdekat untuk "{query}" dari database demo.'
  }
};

const STORAGE_KEY = 'ecoproof-language';
const storedLanguage = localStorage.getItem(STORAGE_KEY);
let currentLanguage = storedLanguage === 'en' ? 'en' : 'id';

function getText(key){
  return (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage][key]) || TRANSLATIONS.en[key] || key;
}

function getProductTranslation(product, field){
  const productKey = Object.keys(DB).find(key => DB[key] === product) || normalizeKey(product && product.name ? product.name : '');
  const translation = PRODUCT_TRANSLATIONS[currentLanguage] && PRODUCT_TRANSLATIONS[currentLanguage][productKey];
  return (translation && translation[field]) || product && product[field] || '';
}

function getEvidenceTranslation(key, field){
  const translation = EVIDENCE_TRANSLATIONS[currentLanguage] && EVIDENCE_TRANSLATIONS[currentLanguage][key];
  return (translation && translation[field]) || EVIDENCE_TEMPLATES[key] && EVIDENCE_TEMPLATES[key][field] || '';
}

function getVerdictText(key){
  return (VERDICT_TRANSLATIONS[currentLanguage] && VERDICT_TRANSLATIONS[currentLanguage][key]) || VERDICT_TRANSLATIONS.en[key] || key;
}

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getText(key);
    if (translation) {
      element.innerHTML = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = getText(key);
    if (translation) {
      element.placeholder = translation;
    }
  });

  const toggleButton = document.querySelector('.lang-switch span');
  if (toggleButton) {
    toggleButton.textContent = currentLanguage === 'id' ? 'ID / EN' : 'EN / ID';
  }

  document.documentElement.lang = currentLanguage === 'id' ? 'id' : 'en';
}

function toggleLanguage(){
  currentLanguage = currentLanguage === 'id' ? 'en' : 'id';
  localStorage.setItem(STORAGE_KEY, currentLanguage);
  applyTranslations();
}

function initChatWidget(){
  const chatContainer = document.createElement('div');
  chatContainer.className = 'chat-widget-container';
  chatContainer.innerHTML = `
    <div class="chat-widget">
      <button type="button" class="chat-widget-toggle" id="chatWidgetToggle" aria-label="${getText('chat.openLabel')}">${getText('chat.openLabel')}</button>
      <div class="chat-widget-panel closed" id="chatWidgetPanel">
        <div class="chat-widget-header">
          <div id="chatWidgetTitle">${getText('chat.title')}</div>
          <button type="button" class="chat-widget-close" id="chatWidgetClose" aria-label="${getText('chat.closeLabel')}">×</button>
        </div>
        <div class="chat-widget-body">
          <p>${getText('chat.body')}</p>
        </div>
      </div>
    </div>`;

  document.body.appendChild(chatContainer);

  const toggle = document.getElementById('chatWidgetToggle');
  const panel = document.getElementById('chatWidgetPanel');
  const closeButton = document.getElementById('chatWidgetClose');

  const updateLabels = () => {
    const isClosed = panel.classList.contains('closed');
    const openText = getText('chat.openLabel');
    const closeText = getText('chat.closeLabel');
    toggle.textContent = isClosed ? openText : closeText;
    toggle.setAttribute('aria-label', isClosed ? openText : closeText);
    closeButton.setAttribute('aria-label', closeText);
    document.getElementById('chatWidgetTitle').textContent = getText('chat.title');
    panel.querySelector('.chat-widget-body p').textContent = getText('chat.body');
  };

  toggle.addEventListener('click', () => {
    panel.classList.toggle('closed');
    updateLabels();
  });

  closeButton.addEventListener('click', () => {
    panel.classList.add('closed');
    updateLabels();
  });

  updateLabels();
}

applyTranslations();
initChatWidget();

function iconChar(t){
  if (t === 'ok') return '✓';
  if (t === 'partial') return '!';
  if (t === 'not-evaluated' || t === 'missing') return '-';
  return '✗';
}

function normalizeKey(text){
  return String(text || '').toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

function levenshtein(a, b){
  const source = String(a || '');
  const target = String(b || '');
  const rows = source.length + 1;
  const cols = target.length + 1;
  const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) matrix[i][0] = i;
  for (let j = 0; j < cols; j++) matrix[0][j] = j;
  for (let i = 1; i < rows; i++){
    for (let j = 1; j < cols; j++){
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[source.length][target.length];
}

function getClosestProduct(query){
  const q = normalizeKey(query);
  if(!q) return null;
  let best = null;
  let bestScore = Infinity;
  Object.values(DB).forEach(product => {
    const candidate = normalizeKey(product.name);
    const distance = levenshtein(q, candidate);
    const normalized = distance / Math.max(q.length, candidate.length, 1);
    if(normalized < bestScore){
      bestScore = normalized;
      best = product;
    }
  });
  return bestScore <= 0.35 ? { product: best, score: bestScore } : null;
}

function buildEvidenceRows(product){
  const evidence = Array.isArray(product.evidence) ? product.evidence : [];
  return evidence.map(item => {
    const label = getEvidenceTranslation(item.key, 'label') || EVIDENCE_TEMPLATES[item.key]?.label || item.label || item.key || 'Evidence';
    const description = getEvidenceTranslation(item.key, 'description') || item.description || EVIDENCE_TEMPLATES[item.key]?.description || '';
    return [item.status || 'missing', label, description];
  });
}

function deriveProductState(product){
  const indicators = buildEvidenceRows(product);
  const total = indicators.length || 10;
  const score = indicators.reduce((sum, [status]) => sum + (status === 'ok' ? 10 : status === 'partial' ? 5 : 0), 0);
  const normalizedScore = Math.min(100, Math.round((score / (total * 10)) * 100));

  let verdict = 'red';
  let verdictLabel = getVerdictText('highRisk');
  if(normalizedScore >= 75){ verdict = 'green'; verdictLabel = getVerdictText('verifiedEvidence'); }
  else if(normalizedScore >= 45){ verdict = 'amber'; verdictLabel = getVerdictText('insufficientEvidence'); }

  return {
    ...product,
    name: getProductTranslation(product, 'name') || product.name,
    cat: getProductTranslation(product, 'cat') || product.cat,
    summary: getProductTranslation(product, 'summary') || product.summary,
    score: normalizedScore,
    verdict,
    verdictLabel,
    indicators
  };
}

function render(p, note){
  const product = deriveProductState(p);
  const el = document.getElementById('results');
  const noteHtml = note ? `<div class="note-banner">${note}</div>` : '';
  const rows = product.indicators.map(([type, name, desc]) => `
    <div class="indicator">
      <div class="icon ${type}">${iconChar(type)}</div>
      <div class="body">
        <div class="name">${name}</div>
        <div class="desc">${desc}</div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    ${noteHtml}
    <div class="result-header">
      <div class="stamp ${product.verdict}">
        <div class="score">${product.score}</div>
        <div class="label">/ 100</div>
      </div>
      <div class="result-meta">
        <div class="pname">${product.name}</div>
        <div class="pcat">${product.cat}</div>
        <span class="verdict-tag ${product.verdict}">${product.verdictLabel}</span>
      </div>
    </div>
    <div class="summary-box">
      <span class="tag">${getText('result.summaryLabel')}</span>
      <span class="summary-text">${product.summary}</span>
    </div>
    <div class="panel-title">${getText('result.breakdownTitle')}</div>
    <div class="panel-sub">${getText('result.breakdownSub')}</div>
    <div class="indicator-list">${rows}</div>
  `;
  el.style.display = 'block';
  el.scrollIntoView({behavior:'smooth', block:'start'});
}

async function runSearch(){
  const q = document.getElementById('searchInput').value.trim();
  const normalized = normalizeKey(q);
  const exactMatch = normalized && DB[normalized];
  const substringMatch = exactMatch || Object.values(DB).find(p => normalizeKey(p.name).includes(normalized));

  if(substringMatch){
    await render(substringMatch);
    return;
  }

  if(normalized){
    const closest = getClosestProduct(q);
    if(closest){
      await render(closest.product, getText('result.closestMatch').replace('{query}', q));
      return;
    }

    document.getElementById('results').innerHTML = `
      <div style="padding:60px 0; text-align:center;">
        <div class="panel-title">${getText('result.noMatchTitle')}</div>
        <p class="panel-sub">${getText('result.noMatchText')}</p>
      </div>`;
    document.getElementById('results').style.display = 'block';
  }
}

function demo(name){
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  searchInput.value = name;
  runSearch();
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keydown', e => { if(e.key === 'Enter') runSearch(); });
}

