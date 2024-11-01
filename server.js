const express = require('express');
const path = require('path');
const app = express();

// Serve arquivos estáticos da pasta 'www'
app.use(express.static(path.join(__dirname, 'www')));

// Rotas para as páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.get('/aprenda', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'aprenda.html'));
});

app.get('/quiz', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'quiz.html'));
});

app.get('/anemia', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'anemia.html'));
});

app.get('/fenilcetonuria', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'fenilcetonuria.html'));
});

app.get('/fibrose-cistica', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'fibrose_cistica.html'));
});

app.get('/down', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'down.html'));
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});
