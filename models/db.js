const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/StudentDB',{
    userNewUrlParser: true
},
err=>{
    if(err){
        console.log('Connection Successful')
    }else{
        console.log('Error in Connection')
    }
})

require('./student.model')