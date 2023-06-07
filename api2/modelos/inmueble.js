const {Schema, model} = require('mongoose');
const InmuebleSchema = Schema({
    direccion:{
        type: String,
        required: [true, "La direccion es requerida"]
    },
    tipo_inmueble:{
        type: String,
        enum: ["Apartamento", "Casa", "Local"],
        required: [true,"Definir el tipo de inmueble"]
    },
    valor_arriendo:{
        type: Number,
        validate:{
            validator: (value) =>{
                return value >= 800000 && value <= 4000000
            },
            message: "Valor de arriendo no valido"
        },
        required:[true, "Se debe definir el valor del arriendo"]
    },
    ciudad:{
        type: String,
        enum: ["Medellin", "Bello", "Envigado"],
        required: [true, "Se debe asignar una ciudad"]
    }
})


module.exports = model("Inmueble", InmuebleSchema);