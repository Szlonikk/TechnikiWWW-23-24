const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql2');

app.use(express.static('view'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11112222',
    database: 'telefony',
    port: 3306               
});

connection.connect(error => {
    if (error) throw error;
        console.log("Successfully connected to the database.");
});

app.post('/increment', (req, res) => {
    
    const id = req.body.id;
    const query = "UPDATE telefon SET ilosc = ilosc + 1 WHERE id = ?";
    connection.query(query, [id], (error, results) => {
        if (error) throw error;
        res.send({ success: true, message: 'Value incremented successfully.' });
    });
});

app.post('/decrement', (req, res) => {
    const id = req.body.id;
    const query = "UPDATE telefon SET ilosc = ilosc - 1 WHERE id = ? AND ilosc > 0";

    connection.query(query, [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.affectedRows === 0) {
            res.send({ success: false, message: 'Value cannot be decremented below 0 or item not found.' });
        } else {
            res.send({ success: true, message: 'Value decremented successfully.' });
        }
    });
});



