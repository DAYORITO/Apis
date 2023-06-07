const Usuario = require('../modelos/usuarios');
//Consulta
const getUsuario = async(req,res=response)=>{
    let mensaje = '';
    try{
        //consulta en la coleccion
        const usuarios = await Usuario.find()
        mensaje=usuarios
    }catch(e){
        mensaje= e;
    }

    res.json({
        msg: mensaje
    })
}
const postUsuario = async(req,res = response) => {
    const body = req.query
    const usuario = new Usuario(body)
    let mensaje = '';

    try{
        await usuario.save()
        mensaje = 'Usuario registrado existosamente'
    }catch(e){
        mensaje = e;
    }
    res.json({
        mensaje
    })
}


module.exports = {
    getUsuario,
    postUsuario
}