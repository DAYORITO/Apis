const {Router} = require('express');
const route = Router();

const {getPropietario, postPropietario, putPropietario, deletePropietario } = require('../controllers/propietario');

route.get('/pro', getPropietario);
route.post('/pro', postPropietario);
route.put('/pro', putPropietario);
route.delete('/pro', deletePropietario);

module.exports = route;