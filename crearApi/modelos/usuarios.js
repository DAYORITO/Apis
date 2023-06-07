const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  password: {
    type: String,
    required: [true, "El password es obligatorio"],
  },
  rol: {
    type: String,
    enum: ['Admin', 'Cliente'],
    required: [true, "El password es obligatorio"],
  },
  estado: {
    type: Boolean,
    default: true,
    required: [true, "El rol es obligatorio"],
  },
});

module.exports = model("Usuario", UsuarioSchema);
