const mongoose = require('mongoose');

const URI = "mongodb+srv://ashwinsathiya:PdgZteb7JNSU9Sgw@first.n1as9m8.mongodb.net/UserDetails?retryWrites=true&w=majority"

const connect = async () => {
    try{    
        await mongoose.connect(URI);
        console.log('connected');
    }catch(err){
        console.log(err);
        process.exit(0);
    }
}

module.exports = connect