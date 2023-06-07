require('dotenv').config();
const dbConection = require('../database/config')
const express = require('express');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.schemasPath = '/api/schema'
        this.routes();
        this.middleware();
        this.dbConection();
    }
    middleware() {
        this.app.use(express.json())
    }
    routes() {
        this.app.use(this.schemasPath, require('../routes/inmueble'))
        this.app.use(this.schemasPath, require('../routes/propietario'))
    }
    async dbConection() {
        await dbConection();
    }
    listen(){
        this.app.listen(9090, ()=>{
            console.log('escuando puerto', this.port);

        })
    }

}
module.exports = Server;