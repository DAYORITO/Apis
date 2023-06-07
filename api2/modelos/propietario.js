const {Schema, model} = require('mongoose');
const PropietarioSchema = Schema({
    documento:{
        type: Number,
        required: [true, "Se debe ingresar un numero de documento"]
    },
    tipo_documento:{
        type: String,
        enum: ["CC","NIT","CE"],
        required: [true, "Se requiere especificar el tipo de documento"]
    },
    fecha_nacimiento:{
        type: String,
        validate: {
            validator: function (value){
                const nacimiento = new Date(value);
                const fecha = new Date();

                return nacimiento <= fecha;
            },
            message: "La fecha es invalida, no debe ser mayor a la actual"
        },
    },
    celular:{
        type : String,
        required: [true, "Debe ingresar un numero de celular"]
    }
})
module.exports= model("Propietario", PropietarioSchema)