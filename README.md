# EcoProof Prototype

EcoProof is a prototype for verifying green claims using a small dummy evidence database and a fully static site design.

## What is included
- `index.html` — main search page with the product verification UI
- `learn.html` — dedicated education page for greenwashing literacy
- `evidence.html` — placeholder Evidence Network page for future expansion
- `style.css` — shared site styling and layout
- `script.js` — product database, search logic, typo-tolerant matching, and rendering

## What this project does today
- Lets a user search demo products by name
- Matches misspelled names to the closest product in the dummy database
- Displays a score, verdict, and evidence breakdown for each product
- Shows a separate education page and an Evidence Network placeholder

## Setup on a completely new machine

### Preview locally (no Python needed)
1. Open this folder in VS Code
2. Install the **Live Server** extension if needed
3. Right-click `index.html` and choose **Open with Live Server**

This will run the frontend locally in your browser.

### Deploy to GitHub Pages
1. Push this repository to GitHub
2. Enable GitHub Pages in the repository settings
3. Set the source to the `main` branch or the `docs/` folder if you move files there
4. Open the published site from the GitHub Pages URL

## How to expand the demo database

### Step 1: open `script.js`
The demo products are stored in the `DB` object near the top of the file.

### Step 2: add a new product entry or send this to any ai to help fill it out
Each product key should be the lowercase normalized name, for example:
```js
"new product name": {
  name: 'New Product Name',
  cat: 'Category · Subtype',
  summary: 'Short, evidence-based summary of the result.',
  evidence: [
    { key: 'certification', status: 'ok', description: 'Certification details.' },
    { key: 'labTesting', status: 'partial', description: 'What is missing or partial.' },
    { key: 'marketing', status: 'missing', description: 'Why the claim is not supported.' }
  ]
}
```

### Step 3: use the existing evidence keys
The app understands these evidence keys automatically:
- `certification`
- `certificateAuthenticity`
- `labTesting`
- `lca`
- `emissions`
- `materialComposition`
- `endOfLife`
- `audit`
- `marketing`
- `docs`

You can add any subset of them, but keeping the key names consistent preserves the label and explanation behavior.

### Step 4: save and retry
After saving `script.js`, refresh the page in your browser and search for the new product.

## How to change the site style
- `style.css` contains the full visual styling
- The `:root` section at the top defines colors, fonts, and spacing tokens
- Update those values to change the design globally

## Notes for a novice user
- `index.html` is the main page you use to test the search
- `learn.html` is the education page with greenwashing guidance
- `evidence.html` is a coming-soon page and can be expanded later
- `script.js` is the main application logic and the place to add new products

## Recommended stuff to add next
1. Add new product examples to `script.js`
2. Update `evidence.html` with a real network layout or table
3. Turn the explanation section into a richer evidence detail panel
4. Add more learn page content and links to certifications