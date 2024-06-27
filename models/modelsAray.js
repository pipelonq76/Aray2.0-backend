import db from "../database/db.js";

import { DataTypes } from "sequelize";

const Usuario = db.define('usuario',{
    id_usuario : {type: DataTypes.INTEGER,
        primaryKey: true
    },
    foto_usuario : {type: DataTypes.BLOB},
    nombre_usuario : {type: DataTypes.STRING},
    segundo_nombre_usuario : {type: DataTypes.STRING},
    apellido_usuario : {type: DataTypes.STRING},
    sexo_usuario : {type: DataTypes.ENUM("M","F")},
    segundo_apellido_usuario : {type: DataTypes.STRING},
    fecha_nacimiento_usuario : {type: DataTypes.DATE},
    correo_electronico_usuario : {type: DataTypes.STRING},
    direccion_usuario : {type: DataTypes.STRING},
    clave_usuario : {type: DataTypes.STRING},
    celular_usuario : {type: DataTypes.INTEGER},
},  
{
    timestamps: false,
    freezeTableName: true,
    tableName: "usuario"
});
;
export default Usuario;