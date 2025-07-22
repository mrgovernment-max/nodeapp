const express = require('express');
const app = express();

// Your routes go here
app.get('/', (req, res) => {
  res.send('Hello Emman!');
});

// 🔥 This line lets your app work both locally and on platforms like Render or Azure
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
