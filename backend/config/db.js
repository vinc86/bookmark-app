const {mongoURI, mongoOptions} = require("./keys");

module.exports = mongoose =>{
    try{
        mongoose.connect(mongoURI,mongoOptions,()=>{
            console.log("Connected to Database...")
        })
    }catch(err){
        console.log(err.message)
    }
}