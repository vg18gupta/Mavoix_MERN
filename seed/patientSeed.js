const Patient = require('../model/patientModel');
const Appointment = require('../model/appointmentModel');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/patient',(err) => {
    console.log("err", err)
    const Patients = [
        new Patient({
            pt_id : "P001",
            mob_number: "9966002055",
            reg_date:"03-11-2011",
            reg_time: "9:10",
            pt_name: "mr. vishal",
            gender: "male",
            age: "24",
            location:"tez"
        }),
    
    ];
    
    for (var i = 0; i<Patients.length; i++){
        Patients[i].save();
    }
    
    const Appointments = [
        new Appointment({
            apn_id: "APN901",
            pt_id : "P001",
            apn_date:"22-11-2019",
            apn_time: "11:30",
            dr_name: "vishal",
            lab_test_status: "pending",
            type: "OPD",
            payment_status: "false"
        })
    ];
    
    for (var i = 0; i<Appointments.length; i++){
        Appointments[i].save();
    }
});



