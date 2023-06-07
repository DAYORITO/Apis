const express = require('express');
const dbConection = require('../database/config');
class Server {
    constructor() {
        this.port = process.env.PORT;
        this.schemasPath = '/api/schema'
        this.app = express();
        this.middleware();
        this.routes();
        this.dbConection();
    }
    middleware() {
        this.app.use(express.json());
    }
    routes(){
        this.app.use(this.schemasPath, require('../routes/persona'))
    }
    async dbConection(){
        await dbConection();
    }
    listen(){
        this.app.listen(9090, ()=>{
            console.log('Escuchando puerto', this.port);
        });
    };
}
module.exports = Server;