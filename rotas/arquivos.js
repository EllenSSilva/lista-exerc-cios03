const express = require('express')

const router = express.Router()

 let listaPessoas =[]
 router.get('/pessoas', (req, res)=>{
    res.json(listaPessoas)
})
router.get('/pessoas/:id',(req,res)=>{
    const id = req.params.id
    const pessoas = listaPessoas[id]
    res.json(pessoas)
})

router.post('/pessoas', (req, res)=>{
    const pessoas = req.body
    listaPessoas.push(pessoas)
    res.json("Pessoa cadastrado ")
})
router.delete('/pessoas/:id',(req, res)=>{
    const id = req.params.id
listaPessoas.splice(id, 1)
res.json("Pessoa deletada")

})

router.put('/pessoas/:id', (req, res )=>{
    const id = req.params.id
    const {nome, idade, email,telefone} = req.body
    const pessoaAtualizada ={nome, idade, email, telefone}
    listaPessoas[id]= pessoaAtualizada
        res.json(pessoaAtualizada)
    })
module.exports = router