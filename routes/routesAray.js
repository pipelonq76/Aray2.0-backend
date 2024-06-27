import express from "express"
import {TraerDatosUsuarios, RegistrarUsuario} from "../controllers/controllersAray.js"
const router = express.Router()

router.get('/',TraerDatosUsuarios)
router.post('/', RegistrarUsuario)

export default router