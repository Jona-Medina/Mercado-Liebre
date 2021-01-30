const express = require('express');
const path = require('path');
const app = express();

port = 3000;

app.listen (port, (req, res)=>{
     console.log('Servidor corriendo');
});

const staticFolder = path.resolve(__dirname, './public');
app.use(express.static(staticFolder));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});