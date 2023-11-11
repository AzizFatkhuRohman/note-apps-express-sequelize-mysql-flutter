import aktifitas from "../models/aktifitas.model.js"

export default new class aktifitasController{
    getAllAktifitas = async(req,res)=>{
        try {
            let data = await aktifitas.findAll({
                order:[
                    ['createdAt', 'DESC']
                ]
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
    getFindAktifitas = async(req,res)=>{
        const aktifitasId = req.params.id
        try {
            let data = await aktifitas.findOne({
                where:{id:aktifitasId}
            })
            return res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }
    postAktifitas = async(req,res)=>{
        const {
            nama_kegiatan,kategori,skala_prioritas,deskripsi
        } = req.body
        try {
            await aktifitas.create({
                nama_kegiatan:nama_kegiatan,kategori:kategori,
                skala_prioritas:skala_prioritas,deskripsi:deskripsi
            })
            return res.status(200).json({
                msg:"Data Berhasil Dikirim"
            })
        } catch (error) {
            console.log(error)
        }
    }
    putAktifitas = async(req,res)=>{
        const {
            nama_kegiatan,kategori,skala_prioritas,deskripsi
        } = req.body
        const aktifitasId = req.params.id
        try {
            await aktifitas.update({
                nama_kegiatan:nama_kegiatan,kategori:kategori,
                skala_prioritas:skala_prioritas,deskripsi:deskripsi
            },{
                where:{
                    id:aktifitasId
                }
            })
            return res.status(200).json({
                msg:"Data Berhasil Diubah"
            })
        } catch (error) {
            console.log(error)
        }  
    }
}

