const {Router} = require('express');
const route = Router();

const {getInmueble, postInmueble, putInmueble, deleteInmueble} = require('../controllers/inmueble');

route.get('/In', getInmueble);
route.post('/In', postInmueble);
route.put('/In', putInmueble);
route.delete('/In', deleteInmueble);

module.exports = route;