import { Sequelize } from "sequelize";

const database = new Sequelize('note_app','root','',{
    host:'localhost', dialect:'mysql'
})

export default database