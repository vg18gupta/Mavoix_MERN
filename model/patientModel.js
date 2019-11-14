const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PatientSchema = new Schema({
    pt_id : {type: String, required: true},
    mob_number: {type: String, required: true},
    reg_date:{type: String, required: true},
    reg_time: {type: String, required: true},
    pt_name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: String, required: true},
    location: {type: String, required: true}


  

})


const Patient = mongoose.model('Patient', PatientSchema)
module.exports = Patient

