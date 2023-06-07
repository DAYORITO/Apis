const Persona = require("../modelos/persona");

const getPersona = async (req, res) => {
  try {
    const persona = await Persona.find();
    const calcularEdad = (fechaNacimiento) => {
        const fechaNac = new Date(fechaNacimiento);
        const fechaActual = new Date();
        
        let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
        
        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();
        
        const mesNacimiento = fechaNac.getMonth();
        const diaNacimiento = fechaNac.getDate();
        
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
          edad--;
        }
        
        return edad;
      };
      const personasConEdad = persona.map(person => {
        const edad = calcularEdad(person.fecha_nacimiento);
        return {...person.toObject(), edad };
      }); 

      const edades = personasConEdad.map(persona => persona.edad);
      const promedioEdades = edades.reduce((total, edad) => total + edad, 0) / edades.length;

      res.json({
      mesaje: "Consulta exitosa",
      persona: personasConEdad,
      promedioEdades,
    });
  } catch (e) {
    res.json({
      mensaje: "",
      e,
    });
  }
};
const postPersona = async (req, res) => {
  try {
    const body = req.query;
    const persona = new Persona(body);
    await persona.save();
    res.json({
      mensaje: "Persona creada existosamente",
      propietario: persona,
    });
  } catch (e) {
    res.status(500).json({
      mensaje: "Error al registrar persona",
      e,
    });
  }
};
const putPersona = async (req, res = response) => {
  try {
    const body = req.query;
    const persona = await Persona.findOneAndUpdate({documento: body.documento}, {fecha_nacimiento: body.fecha_nacimiento});
    const personaModificada = await Persona.find({documento: body.documento})
    res.json({
      mensaje: "Se modifico exitosamente el la persona",
      persona,
      mensaje2: "Se modifico a: ",
      personaModificada,
    });
  } catch (e) {
    res.json({
      mensaje: "No se pudo modificar la persona",
      e,
    });
  }
};
const deletePersona = async (req, res = response) => {
  const body = req.query;
  try {
    if(body.tipoEliminacion == "unitaria" || body.tipoEliminacion == ""){
    const persona = await Persona.findOneAndDelete({documento: body.documento});
    res.json({
      mensaje: "Se elimino exitosamente la siguiente persona",
      persona,
    });
  }
  else if (body.tipoEliminacion == "multiple"){
    const persona = await Persona.deleteMany({documento: body.documento});
    res.json({
      mensaje: "Se elimino exitosamente las siguientes personas",
      persona,
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
    getPersona,
    postPersona,
    putPersona,
    deletePersona
}