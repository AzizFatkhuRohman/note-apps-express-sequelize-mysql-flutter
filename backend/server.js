import express from "express";
import database from "./app/config/database.js";
// import catatan from "./app/models/catatan.model.js";
import route from "./app/routes/route.js";

const app = express()
const port = 5050
app.listen(port,()=>{
    console.log("Server Running",port)
})

try {
    await database.authenticate()
    console.log('Database connected')
    // await catatan.sync()
} catch (error) {
    console.log(error)
}
app.use(express.json())
app.use(route)