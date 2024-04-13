//importa express
const express = require('express')

//criar um router
const router = express.Router()

//dados Mockados

 let listaPessoas =[]
// read busca todas as pessoas
 router.get('/pessoas', (req, res)=>{
    res.json(listaPessoas)
})
// read busca contato pelo 
router.get('/pessoas/:id',(req,res)=>{
    const id = req.params.id
    const pessoas = listaPessoas[id]
    res.json(pessoas)
})

//read cadastra contatos
router.post('/pessoas', (req, res)=>{
    const pessoas = req.body
    listaPessoas.push(pessoas)
    res.json("Pessoa cadastrado ")
})
//read deleta contato pelo id 
router.delete('/pessoas/:id',(req, res)=>{
    const id = req.params.id
listaPessoas.splice(id, 1)
res.json("Pessoa deletada")

})

//upadate atualização contatos
router.put('/pessoas/:id', (req, res )=>{
    const id = req.params.id
    const {nome, idade, email,telefone} = req.body
    const pessoaAtualizada ={nome, idade, email, telefone}
    listaPessoas[id]= pessoaAtualizada
        res.json(pessoaAtualizada)
    })

//exporrta router
module.exports = router