const express = require('express');
const app = express();
const fs = require('fs');

// Define the route to fetch the language JSON file
app.get('/api/language/:lang', (req, res) => {
  const lang = req.params.lang.toLowerCase();
  const filePath = `./translations/${lang}.json`;
console.log(req,lang,filePath)
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send('Language file not found');
      return;
    }

    res.json(JSON.parse(data));
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
