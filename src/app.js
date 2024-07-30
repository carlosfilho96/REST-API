import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()

// indicar apara o express ler body com json
app.use(express.json())

// rotas
app.get('/selecoes', SelecaoController.index)
app.get('/selecoes/:id', SelecaoController.show)
app.post('/selecoes', SelecaoController.store)
app.delete('/selecoes/:id', SelecaoController.delete)
app.put('/selecoes/:id', SelecaoController.update)

export default app
