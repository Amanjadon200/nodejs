const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/task-manager-api')
module.exports=mongoose