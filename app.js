const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = process.env.PORT || 3000;

const tr_db = new sqlite3.Database('./data/TR_AtaturkQuotes.db');
const de_db = new sqlite3.Database('./data/DE_AtaturkQuotes.db');
const en_db = new sqlite3.Database('./data/EN_AtaturkQuotes.db');
const es_db = new sqlite3.Database('./data/ES_AtaturkQuotes.db');
const fr_db = new sqlite3.Database('./data/FR_AtaturkQuotes.db');
const it_db = new sqlite3.Database('./data/IT_AtaturkQuotes.db');
const ja_db = new sqlite3.Database('./data/JA_AtaturkQuotes.db');
const ko_db = new sqlite3.Database('./data/KO_AtaturkQuotes.db');
const pl_db = new sqlite3.Database('./data/PL_AtaturkQuotes.db');
const ru_db = new sqlite3.Database('./data/RU_AtaturkQuotes.db');
const zh_db = new sqlite3.Database('./data/ZH_AtaturkQuotes.db');

app.get('/tr', (req, res) => {
  tr_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/de', (req, res) => {
  de_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/en', (req, res) => {
  en_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/es', (req, res) => {
  es_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/fr', (req, res) => {
  fr_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/it', (req, res) => {
  it_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/ja', (req, res) => {
  ja_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/ko', (req, res) => {
  ko_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/pl', (req, res) => {
  pl_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/ru', (req, res) => {
  ru_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.get('/zh', (req, res) => {
  zh_db.get('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1', (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ quote: row.quote });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
