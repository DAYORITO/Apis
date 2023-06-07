require('dotenv').config();
const dbConection = require('../database/config')
const express = require('express');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8082;
        this.usuarioPath= '/api/usuario'
        this.routes();
        this.middleware();
        this.dbConection();
    }
    middleware(){
        this.app.use(express.json());
    }
    routes(){
        // this.app.use('/', rutas);
        this.app.use(this.usuarioPath, require('../routes/usuarios') )
    }
    async dbConection(){
        await dbConection()
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('App escuchando por puerto', this.port);
        });
    }


}
module.exports=Server;