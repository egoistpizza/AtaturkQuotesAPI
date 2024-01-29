const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

const DATA_PATH = './data/';

// Databases for different languages
const databases = {
  tr: new sqlite3.Database(DATA_PATH + 'TR_AtaturkQuotes.db'),
  de: new sqlite3.Database(DATA_PATH + 'DE_AtaturkQuotes.db'),
  en: new sqlite3.Database(DATA_PATH + 'EN_AtaturkQuotes.db'),
  es: new sqlite3.Database(DATA_PATH + 'ES_AtaturkQuotes.db'),
  fr: new sqlite3.Database(DATA_PATH + 'FR_AtaturkQuotes.db'),
  it: new sqlite3.Database(DATA_PATH + 'IT_AtaturkQuotes.db'),
  ja: new sqlite3.Database(DATA_PATH + 'JA_AtaturkQuotes.db'),
  ko: new sqlite3.Database(DATA_PATH + 'KO_AtaturkQuotes.db'),
  pl: new sqlite3.Database(DATA_PATH + 'PL_AtaturkQuotes.db'),
  ru: new sqlite3.Database(DATA_PATH + 'RU_AtaturkQuotes.db'),
  zh: new sqlite3.Database(DATA_PATH + 'ZH_AtaturkQuotes.db'),
};

// Helper function to get the database based on language code
const getDatabase = (lang) => databases[lang] || null;

// Endpoint for the root URL (GET /)
app.get('/', (req, res) => {
  return res.status(404).json({ error: 'Please specify the language code.' });
});

// Endpoint to get a random quote for a specific language
app.get('/:lang', (req, res) => {
  const lang = req.params.lang.toLowerCase();
  const db = getDatabase(lang);

  // Check if the requested language is valid
  if (!db) {
    return res.status(400).json({ error: 'Invalid Language' });
  }

  // Retrieve a random quote from the database
  db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
