import express from 'express'
import aktifitasController from '../controllers/aktifitas.controller.js'
import catatanController from '../controllers/catatan.controller.js'
const route = express.Router()

route.get('/', aktifitasController.getAllAktifitas)
route.get('/detail-aktifitas/:id', aktifitasController.getFindAktifitas)
route.post('/post-aktifitas', aktifitasController.postAktifitas)
route.put('/update-aktifitas/:id', aktifitasController.putAktifitas)

route.get('/catatan', catatanController.getAllCatatan)
route.get('/detail-catatan/:id',catatanController.getFindCatatan)
route.post('/post-catatan',catatanController.postCatatan)
route.put('/update-catatan/:id', catatanController.putCatatan)

export default route