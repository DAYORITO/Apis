const Propietario = require("../modelos/propietario");
//Consulta
const getPropietario = async (req, res = response) => {
  try {
    const propietario = await Propietario.find();
    res.json({
      mensaje: "Consulta exitosa",
      propietario,
    });
  } catch (e) {
    res.json({
      mensaje: "",
      e,
    });
  }
};
const postPropietario = async (req, res) => {
  try {
    const body = req.query;
    const fechaFormateada = new Date(body.fecha_nacimiento).toISOString().split('T')[0];

    const nuevoPropietario = new Propietario({
      ...body,
      fecha_nacimiento: fechaFormateada
    });
    await nuevoPropietario.save();
    res.json({
      mensaje: "Propietario registrado exitosamente",
      propietario: nuevoPropietario,
    });
  } catch (e) {
    res.status(500).json({
      mensaje: "Error al registrar el propietario",
      e,
    });
  }
};
const putPropietario = async (req, res = response) => {
  try {
    const propietario = await Propietario.findOneAndUpdate({documento: body.documento}, {celular: body.celular});
    const propietarioMoificado = await Propietario.find({documento: body.documento})
    res.json({
      mensaje: "Se modifico exitosamente el propietario",
      propietario,
      mensaje2: "Se modifico a: ",
      propietario2,
    });
  } catch (e) {
    res.json({
      mensaje: "",
      e,
    });
  }
};
const deletePropietario = async (req, res = response) => {
  const body = req.query;
  try {
    if(body.tipoEliminacion == "unitaria" || body.tipoEliminacion == ""){
    const propietario = await Propietario.findOneAndDelete({documento: body.documento});
    res.json({
      mensaje: "Se elimino exitosamente el siguiente propietario",
      propietario,
    });
  }
  else if (body.tipoEliminacion == "multiple"){
    const propietario = await Propietario.deleteMany({documento: body.documento});
    res.json({
      mensaje: "Se elimino exitosamente los siguientes propietarios",
      propietario,
    });
  }

  } catch (e) {
    res.json({
      mensaje: "error al eliminar propietario",
      e,
    });
  }
};


module.exports = {
    getPropietario,
    postPropietario,
    putPropietario,
    deletePropietario
}