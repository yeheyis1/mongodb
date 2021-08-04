
var mongoose = require('mongoose')
var schema = mongoose.schema;



const userSchema = new schema({
    firstName: { type: String },
    lastName: { type: String },
    passowerd: { type: String },

    email: { type: String },
    
})


const usercatigories = mongoose.model('usercatigoriess', userSchema);

module.exports = usercatigories;