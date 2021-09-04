const mongoose = require('mongoose');
// mongodb://${url}:${port}/${banco}
function Conn(url,port,banco){
    mongoose.connect(`mongodb+srv://dbUser:T0zBuN7AjfkQqnL1@blue-db.e8tfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("MongoDB Connected");
    }).catch((err) =>{
        console.error(err);
    });
}

module.exports = Conn;