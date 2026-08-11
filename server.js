const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/explain', (req, res) => {
  const { product } = req.body || {};
  if (!product) {
    return res.json({ explanation: 'No product data supplied.' });
  }

  const explanation = product.summary || 'No summary available.';
  res.json({ explanation });
});

app.listen(port, () => {
  console.log(`EcoProof server running on http://localhost:${port}`);
});
