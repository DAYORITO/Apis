const {Schema, model} = require('mongoose')

const PersonaSchema = Schema({
    documento:{
        type: Number,
        required: [true, "Se requiere ingresar el documento"]
    },
    nombre:{
        type: String,
        required: [true, "Se requiere ingresar el nombre"]
    },
    genero:{
        type: String,
        enum: ["M","F","m","f"],
        required: [true, "Se requiere ingresar el dato del genero"]
    },
    fecha_nacimiento:{
        type: String,
        validate:{
            validator: (value)=>{
                const fechan = new Date(value).getFullYear();
                const fecha = new Date().getFullYear();
                return fecha-fechan >= 18;
            },
            message: "No se puede registrar, es menor de edad"
        },
        required: [true, "Se requiere ingresar la fecha de nacimiento"]
    },
})

module.exports = model("Persona", PersonaSchema)