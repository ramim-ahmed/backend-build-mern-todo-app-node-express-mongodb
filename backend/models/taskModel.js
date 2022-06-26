const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});



module.exports = mongoose.model('task', taskSchema);
