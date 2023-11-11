import { Sequelize } from "sequelize";
import database from "../config/database.js";

const {DataTypes} = Sequelize
const catatan = database.define('catatan',{
    judul:{
        type:DataTypes.STRING
    },
    kategori:{
        type:DataTypes.STRING
    },
    deskripsi:{
        type:DataTypes.STRING(1000)
    }
},{
    freezeTableName:true
})

export default catatan