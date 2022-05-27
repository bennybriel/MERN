const mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: ' GThis field is required'
    },
    email:{ 
        type: String,
        required :'This is required Field'
    },
    mobile:
    {
        type: Number,
        required:'Ths is required Field'
    },
    city:{
        type: String,
        required: 'This is required Field'
    }
})

mongoose.model('Student', studentSchema);