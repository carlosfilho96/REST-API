import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'bdcopa'
})

conexao.connect()

// JS DOC
/**
 * Executa um código sql com ou sem valores
 * @param {string} sql instrução sql a ser executada 
 * @param {string | [selecao, id]} values valores a serem passados para o sql
 * @param {string} mensage mensagem a ser exibida
 * @returns objeto da promise
 */

export const consulta = (sql, values='', mensage) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (error, result) => {
            if(error) {
                return reject(mensage)
            } else {
                // fazer o parse dos resultados
                const rows = JSON.parse(JSON.stringify(result))
                return resolve(rows)
            }
        })
    })          
}

export default conexao
