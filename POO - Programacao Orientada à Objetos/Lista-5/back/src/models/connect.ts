import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv'
const connection = new Sequelize(`${process.env.DATABASE}`, `${process.env.USERNAME}`, `${process.env.PASSWORD}`, {
    host: "localhost",
    dialect: "mysql"
})
connection.authenticate().then(() => console.log("Conexão realizada com sucesso!")).catch(() => console.log("Conexão não estabelecida!"))

module.exports = connection