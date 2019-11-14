const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    apn_id: {type: String, required: true},
    pt_id : {type: String, required: true},
    apn_date:{type: String, required: true},
    apn_time: {type: String, required: true},
    dr_name: {type: String, required: true},
    lab_test_status: {type: String, required: true},
    type: {type: String, required: true},
    payment_status: {type: String, required: true}

    //  boool
  

})

const Appointment = mongoose.model('Appointment', AppointmentSchema)
module.exports = Appointment