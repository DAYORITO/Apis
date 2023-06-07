const {Router} = require('express');
const route = Router();

const {getUsuario, postUsuario}=require('../controllers/usuarios')




// const teammates = [
// {id: 1, nombre: 'daniel rivera', edad:43, matricula: true},
// {id: 2, nombre: 'kelly marin', edad:29, matricula: true},
// {id: 3, nombre: 'camilo mintik', edad:19, matricula: false},
// {id: 4, nombre: 'vanesa gallego', edad:24, matricula: false},
// {id: 5, nombre: 'alejandra aguirre', edad: 20, matricula: true}
// ];

// app.get('/', (req, res) => {
//     res.json(teammates)
    
// })

// app.get('/', (req, res) => {
//     res.json(teammates)
// })
route.get('/', getUsuario)
route.post('/', postUsuario)


route.put('/', (req, res) => {
    res.json({
        msg: 'put api'
    })
})

route.delete('/', (req, res) => {
    res.json({
        msg: 'delete api'
    })
})
module.exports = route;