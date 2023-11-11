import catatan from "../models/catatan.model.js"

export default new class catatanController {
    getAllCatatan = async(req,res)=>{
        try {
            let data = await catatan.findAll({
                order:[
                    ['createdAt','DESC']
                ]
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
    getFindCatatan = async(req,res)=>{
        const catatanId = req.params.id
        try {
            let data = await catatan.findOne({
                where:{id:catatanId}
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
    postCatatan = async(req,res)=>{
        const {
            judul,kategori,deskripsi
        } = req.body
        try {
            await catatan.create({
                judul:judul,kategori:kategori,deskripsi:deskripsi
            })
            return res.status(200).json({
                msg:"Data Berhasil Dikirim"
            })
        } catch (error) {
            console.log(error)
        }
    }
    putCatatan = async(req,res)=>{
        const catatanId = req.params.id
        const {
            judul,kategori,deskripsi
        } = req.body
        try {
            await catatan.update({
                judul:judul,kategori:kategori,deskripsi
            },{
                where:{id:catatanId}
            })
            return res.status(200).json({
                msg:"Data Berhasil Diubah"
            })
        } catch (error) {
            console.log(error)
        }
    }
}