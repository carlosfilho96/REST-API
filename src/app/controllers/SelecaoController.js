import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {
    async index(req, res) {
        const rows = await SelecaoRepository.findAll()
        res.json(rows)
    }

    async show(req, res) {
        const id = req.params.id
        const rows = await SelecaoRepository.findById(id)
        res.json(rows)
    }

    async store(req, res) {
        const selecao = req.body
        const rows = await SelecaoRepository.create(selecao)
        res.json(rows)
    }

    async update(req, res) {
        const selecao = req.body
        const id = req.params.id
        const rows = await SelecaoRepository.update(selecao, id)
        res.json(rows)
    }

    async delete(req, res) {        
        const id = req.params.id;
        const rows = await SelecaoRepository.delete(id)    
        res.json(rows)          
    }
}

// padrão Singleton
export default new SelecaoController
