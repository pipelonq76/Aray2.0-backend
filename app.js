import express from 'express'
import cors from "cors"
import router from "./routes/routesAray.js"

import db from "./database/db.js"


const app = express()

// app.get  ("/", (req, res)=> {
//     res.send("Hola mundo")
// })

app.use(cors())
app.use(express.json())
app.use('/Aray', router)
app.use('/Aray', router)
try {
    await db.authenticate()
    console.log("conexion exitosa a la DB")
} catch (error) {
    console.log(`El error de conexion es:  ${error}`)
}


app.listen(8000, () => {
    console.log("server ejecutando en http://localhost:8000/")
})