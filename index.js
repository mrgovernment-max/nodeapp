const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8791620",
  password: "1snZQ7T8le",
  database: "sql8791620",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).send({ message: "User added!", id: result.insertId });
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

const port = process.env.PORT || 3000; // ✅ Fixed from 3306
app.listen(port, () => console.log(`Server running on port ${port}`));
