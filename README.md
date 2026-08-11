# EcoProof Prototype

EcoProof is a prototype for verifying green claims using a small dummy evidence database and a simple AI-backed explanation service.

## What is included
- `index.html` — main search page with the product verification UI
- `learn.html` — dedicated education page for greenwashing literacy
- `evidence.html` — placeholder Evidence Network page for future expansion
- `style.css` — shared site styling and layout
- `script.js` — product database, search logic, typo-tolerant matching, and rendering
- `server.py` — optional local backend that generates evidence-based explanations
- `requirements.txt` — Python dependencies for the backend

## What this project does today
- Lets a user search demo products by name
- Matches misspelled names to the closest product in the dummy database
- Displays a score, verdict, and evidence breakdown for each product
- Shows a separate education page and an Evidence Network placeholder
- Uses a Flask backend to return an AI-style explanation if an OpenAI key is available, otherwise it falls back to a built-in summary

## Setup on a completely new machine

### Option 1: Quick demo (no Python needed)
1. Open this folder in VS Code
2. Install the **Live Server** extension if you do not already have it
3. Right-click `index.html` and choose **Open with Live Server**

This will run the frontend locally in your browser.

### Option 2: Full local setup with the backend
This is recommended if you want the optional explanation API or to run the project with Python.

1. Install Python 3.11+ from https://www.python.org/downloads
2. Open a terminal in this folder
3. Create a virtual environment:
   - `python -m venv .venv`
4. Activate the virtual environment:
   - Windows CMD: `.venv\Scripts\activate`
   - Windows PowerShell: `.venv\Scripts\Activate.ps1`
5. Install required packages:
   - `pip install -r requirements.txt`
6. Start the backend service:
   - `python server.py`
7. Open `index.html` with Live Server or a browser

### Optional AI integration
If you want AI-style explanation text or an AI chatbot from `server.py`:
1. Get a Gemini or OpenAI-compatible API key.
2. Store it in an environment variable before starting the server, or create a `.env` file in this folder with:
   - `GEMINI_API_KEY=your_key_here`
3. Restart `python server.py`

The backend will use `GEMINI_API_KEY` first, then `OPENAI_API_KEY` if `GEMINI_API_KEY` is not set.
If no key is configured, the backend still responds with a fallback evidence summary.

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
- `server.py` is optional, only required if you want the backend explanation service or OpenAI integration

## Recommended stuff to add next
1. Add new product examples to `script.js`
2. Update `evidence.html` with a real network layout or table
3. Turn the explanation section into a richer evidence detail panel
4. Add more learn page content and links to certifications