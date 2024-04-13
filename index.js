const express = require('express')
const app = express()
app.use(express.json())
// rotas
const carros = require('./routes/produtos')
app.use(carros)


app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})