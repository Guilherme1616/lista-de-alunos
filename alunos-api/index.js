const express = require('express');
const app = express();
const port = 3000;

const alunos = [
    { RA: '75943', nome: 'João Paulo', email: 'joao.paulo@fatec.sp.gov.br' },
    { RA: '69743', nome: 'Ana Luiza', email: 'ana.luiza@fatec.sp.gov.br' },
    { RA: '52346', nome: 'Guilherme Paixão', email: 'guilherme.paixao@fatec.sp.gov.br' }
];

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});