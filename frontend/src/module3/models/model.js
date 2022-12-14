var mongoose  =  require('mongoose');  
   
var dbschema = new mongoose.Schema({  
    Name:{  
        type:String,
        unique: false,
        required: true,
    },  
    USN:{  
        type:String ,
        unique: true,
        required: true, 
    },   
    Marks:{  
        type:Number 
    } 
});  
   
module.exports = mongoose.model('dbschema', dbschema);