import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

// indicar apara o express ler body com json
app.use(express.json())

// retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// pegar a posicao ou index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// ROTAS
app.get('/selecoes', (req, res) => {
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (error, result) => {
        if(error) {
            res.status(404).json({'erro': error})
        } else {
            res.status(200).json(result);
        }
    })
})

app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const row = result[0]
        if(error) {
            res.status(404).json({'erro': error})
        } else {
            res.status(200).json(row);
        }
    })
})

app.post('/selecoes', (req, res) => {
    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (error, result) => {
        if(error) {
            res.status(400).json({'erro': error})
        } else {
            res.status(201).json(result);
        }
    })    
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index,1)
    res.send(`Seleção exluída com id ${req.params.id} sucesso!`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})

export default app
