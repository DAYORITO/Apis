const {Router} = require('express');
const route = Router();

const {getPersona, postPersona, putPersona, deletePersona} = require('../controller/persona')

route.get('/Persona', getPersona);
route.post('/Persona', postPersona);
route.put('/Persona', putPersona);
route.delete('/Persona', deletePersona);

module.exports = route;