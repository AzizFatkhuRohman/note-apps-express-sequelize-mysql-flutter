import { Sequelize } from "sequelize";
import database from "../config/database.js";

const {DataTypes} = Sequelize
const aktifitas = database.define('aktifitas',{
    nama_kegiatan:{
        type:DataTypes.STRING
    },
    kategori:{
        type:DataTypes.STRING
    },
    skala_prioritas:{
        type:DataTypes.STRING
    },
    deskripsi:{
        type:DataTypes.STRING(500)
    }
},{
    freezeTableName:true
})

export default aktifitas