const Inmueble = require("../modelos/inmueble");
//Consulta
const getInmueble = async (req, res = response) => {
  try {
    const inmuebles = await Inmueble.find();
    res.json({
      mensaje: "Consulta exitosa",
      inmuebles,
    });
  } catch (e) {
    res.json({
      mensaje: "",
      e,
    });
  }
};
const postInmueble = async (req, res) => {
  try {
    const body = req.query;
    const nuevoInmueble = new Inmueble(body);
    await nuevoInmueble.save();
    res.json({
      mensaje: "Inmueble registrado exitosamente",
      inmueble: nuevoInmueble,
    });
  } catch (e) {
    res.status(500).json({
      mensaje: "Error al registrar el inmueble",
      e,
    });
  }
};

const putInmueble = async (req, res) => {
  try {
    const {...body} = req.query;
    const inmueble=await Inmueble.findOneAndUpdate({direccion: body.direccion}, {valor_arriendo: body.valor_arriendo});
    const inmuebleModificado=await Inmueble.find({direccion: body.direccion})
    res.json({
      mensaje: "Inmueble modificado exitosamente",
      inmueble: inmueble,
      mensaje2: "Se modifico a:",
      inmuebleModificado: inmuebleModificado
    });
  } catch (e) {
    res.status(500).json({
      mensaje: "Error al modificar el inmueble",
      e,
    });
  }
};

const deleteInmueble = async (req, res) => {
  try {
    const body = req.query;
    await Inmueble.findOneAndDelete({direccion: body.direccion})
    res.json({
      mensaje: "Inmueble eliminado exitosamente",
      Inmueble,
    });
  } catch (e) {
    res.status(500).json({
      mensaje: "Error al eliminar el inmueble",
      e,
    });
  }
};

module.exports = {
    getInmueble,
    postInmueble,
    putInmueble,
    deleteInmueble
}
