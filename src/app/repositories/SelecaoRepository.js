import conexao from "../database/conexao.js";

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (error, result) => {
                if(error) {
                    return reject('Não foi possivel cadastrar')
                } else {
                    // fazer o parse dos resultados
                    const rows = JSON.parse(JSON.stringify(result))
                    return resolve(rows)
                }
            })
        })        
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) {
                    return reject('Não foi possível localizar')
                } else {
                    // fazer o parse dos resultados
                    const rows = JSON.parse(JSON.stringify(result))
                    return resolve(rows)
                }
            })
        })              
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) {
                    return reject('Não foi possível localizar')
                } else {
                    // fazer o parse dos resultados
                    const rows = JSON.parse(JSON.stringify(result))
                    return resolve(rows)
                }
            })
        })           
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id = ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (error, result) => {
                if(error) {
                    return reject('Não foi possivel atualizar')
                } else {
                    // fazer o parse dos resultados
                    const rows = JSON.parse(JSON.stringify(result))
                    return resolve(rows)
                }
            })
        })      
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) {
                    return reject('Não foi possível apagar')
                } else {
                    // fazer o parse dos resultados
                    const rows = JSON.parse(JSON.stringify(result))
                    return resolve(rows)
                }
            })
        })         
    }
}

export default new SelecaoRepository
