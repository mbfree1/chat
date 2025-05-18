
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'attached_assets')));

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running on port 5000');
});
