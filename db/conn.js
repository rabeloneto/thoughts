const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try{
sequelize.authenticate()
console.log('Conectamos com o Sequelize!')
}catch(err){
console.log(`nao conseguiu conectar no banco, erro: ${err}`)
}

module.exports = sequelize