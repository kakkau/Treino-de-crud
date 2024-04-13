const express = require('express')
const router = express.Router()
let listaProdutos = [
    {
        id: 1,
        nome: "Celta",
        preco: 24.999
    },
    {
        id: 2,
        nome: "Fusca",
        preco: 9.999
    },
    {
        id: 3,
        nome: "Fox",
        preco: 48.999
    }
]
router.get('/produtos', (req, res) => {
    res.status(200).json(listaProdutos)
})
router.get('/produtos/:id', (req, res) => {
    res.json(req.produto)
})
router.post('/produtos', (req, res) => {
    const dados = req.body
    const produto = {
        id: Math.round(Math.random() * 1000),
        nome: dados.nome,
        preco: dados.preco
    }
    listaProdutos.push(produto)
    res.status(201).json(
        {
            mensagem: "Produto cadastrado com sucesso!",
            produto
        }
    )
})
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body
    const index = listaProdutos.findIndex(produto => produto.id == id)
    const produto = {
        id: Number(id),
        nome: novosDados.nome,
        preco: novosDados.preco
    }
    listaProdutos[index] = produto
    res.status(200).json(
        {
            mensagem: "Produto alterado com sucesso!",
            produto
        }
    )
})
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    listaProdutos.splice(index, 1)
    res.status(200).json({ mensagem: "Produto excluido sucesso!" })
})

module.exports = router


