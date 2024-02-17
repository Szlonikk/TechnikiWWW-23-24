const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');


// Serve static files from specified directories
app.use(express.static('view')); // assuming your CSS and JS files are in a 'public' directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // serve your HTML file
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',
    password: 'yourPassword',
    database: 'yourDatabase'
});

// connection.connect(error => {
//     if (error) throw error;
// //     console.log("Successfully connected to the database.");
// });

app.post('/increment', (req, res) => {
    // Przykładowe zapytanie SQL, dostosuj do swojej tabeli i kolumny
    const query = "UPDATE yourTable SET yourColumn = yourColumn + 1 WHERE id = ?";
    connection.query(query, [req.body.id], (error, results) => {
        if (error) throw error;
        res.send({ success: true, message: 'Value incremented successfully.' });
    });
});

app.post('/decrement', (req, res) => {
    // Przykładowe zapytanie SQL, dostosuj do swojej tabeli i kolumny
    const query = "UPDATE yourTable SET yourColumn = yourColumn - 1 WHERE id = ?";
    connection.query(query, [req.body.id], (error, results) => {
        if (error) throw error;
        res.send({ success: true, message: 'Value decremented successfully.' });
    });
});
