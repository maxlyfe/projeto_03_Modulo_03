const mongoose = require('mongoose');
// mongodb://${url}:${port}/${banco}
function Conn(url,port,banco){
    mongoose.connect(`mongodb+srv://Admin:TxVAh0TrhjBHlOCh@cluster0.ptnhe.mongodb.net/test`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("MongoDB Connected");
    }).catch((err) =>{
        console.error(err);
    });
}

module.exports = Conn;