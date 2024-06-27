import {Sequelize} from "sequelize"

const db = new Sequelize ("aray", "root", "",{
    host: 'localhost',
    port: 3309,
    dialect: "mysql",
    define: {
  
    freezeTableName: true
    }

})

export default db;