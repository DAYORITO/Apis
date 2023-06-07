const {mongoose}= require('mongoose');

dbConection= async () => {
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion establecida');

    }catch(err){
        console.log(err)
    }
}
module.exports = dbConection;