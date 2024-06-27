import Usuario from "../models/modelsAray.js"

export const TraerDatosUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const RegistrarUsuario = async (req, res) => {
    try {
        await Usuario.create(req.body) 
        res.json({
            "message": "¡Registro Creado correctamente!"
        })
    } catch(error) {
        res.json ({message:error.message})
    }
}
