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
            pt_name: "Mr. Balakumar S. ",
            gender: "male",
            age: "24",
            location:"chennai"
        }),
        new Patient({
            pt_id : "P002",
            mob_number: "9978636813",
            reg_date:"03-11-2011",
            reg_time: "9:17",
            pt_name: "Mr. Ramesh P. ",
            gender: "male",
            age: "27",
            location:"Bangalore"
        }),
        new Patient({
            pt_id : "P003",
            mob_number: "9827920118",
            reg_date:"03-11-2011",
            reg_time: "9:34",
            pt_name: "Mr. Amit Banerjee ",
            gender: "male",
            age: "35",
            location:"Kolkata"
        }),
        new Patient({
            pt_id : "P004",
            mob_number: "9896380476",
            reg_date:"03-11-2011",
            reg_time: "10:04",
            pt_name: "Ms. Ratna Patil ",
            gender: "Female",
            age: "32",
            location:"Pune"
        }),
        new Patient({
            pt_id : "P005",
            mob_number: "9840807178",
            reg_date:"03-11-2011",
            reg_time: "11:27",
            pt_name: "Mr. T. S. Reddy ",
            gender: "male",
            age: "37",
            location:"cHyderabad"
        }),
        new Patient({
            pt_id : "P006",
            mob_number: "9873773488",
            reg_date:"03-11-2011",
            reg_time: "09:05",
            pt_name: "Ms. R.S. Pillai ",
            gender: "Female",
            age: "45",
            location:"Kochi"
        }),
        new Patient({
            pt_id : "P007",
            mob_number: "9837970545",
            reg_date:"04-11-2011",
            reg_time: "09:11",
            pt_name: "Ms. Swapna Sukla ",
            gender: "male",
            age: "42",
            location:"Punjab"
        }),
        new Patient({
            pt_id : "P008",
            mob_number: "9887172511",
            reg_date:"04-11-2011",
            reg_time: "09:56",
            pt_name: "Mr. Daljit Singh ",
            gender: "male",
            age: "62",
            location:"Bhopal"
        }),
        new Patient({
            pt_id : "P009",
            mob_number: "9941708368",
            reg_date:"04-11-2011",
            reg_time: "10:24",
            pt_name: "Mr. Vinay Gokhlani ",
            gender: "male",
            age: "54",
            location:"Rachi"
        }),
        new Patient({
            pt_id : "P010",
            mob_number: "9826665808",
            reg_date:"04-11-2011",
            reg_time: "9:10",
            pt_name: "Ms. Sultana Khatun ",
            gender: "Female",
            age: "43",
            location:"Delhi"
        }),
    
    ];
    
    for (var i = 0; i<Patients.length; i++){
        Patients[i].save();
    }
    
    const Appointments = [
        new Appointment({
            apn_id: "APN901",
            pt_id : "P002",
            apn_date:"22-11-2019",
            apn_time: "09:11",
            dr_name: "Dr. Sheetal Mennon",
            lab_test_status: "Ready",
            type: "IPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN902",
            pt_id : "P005",
            apn_date:"22-11-2019",
            apn_time: "01:30",
            dr_name: "Dr. S. K. Mukherjee",
            lab_test_status: "In-progress",
            type: "IPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN903",
            pt_id : "P001",
            apn_date:"22-11-2019",
            apn_time: "03:00",
            dr_name: "Dr. K. Balamurgan",
            lab_test_status: "Pending",
            type: "OPD",
            payment_status: "false"
        }),
        new Appointment({
            apn_id: "APN904",
            pt_id : "P009",
            apn_date:"22-11-2019",
            apn_time: "05:30",
            dr_name: "Dr. Hansie Dominic",
            lab_test_status: "Ready",
            type: "OPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN905",
            pt_id : "P003",
            apn_date:"23-11-2019",
            apn_time: "09:30",
            dr_name: "Dr. M. N. Ojha",
            lab_test_status: "Ready",
            type: "IPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN906",
            pt_id : "P004",
            apn_date:"23-11-2019",
            apn_time: "10:00",
            dr_name: "Dr. Sitaram Mishra",
            lab_test_status: "In-progress",
            type: "IPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN907",
            pt_id : "P007",
            apn_date:"23-11-2019",
            apn_time: "11:00",
            dr_name: "Dr. Deepa Nair",
            lab_test_status: "Ready",
            type: "IPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN908",
            pt_id : "P006",
            apn_date:"23-11-2019",
            apn_time: "12:30",
            dr_name: "vDr. Sumit Ahuja",
            lab_test_status: "In-progress",
            type: "IPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN909",
            pt_id : "P005",
            apn_date:"23-11-2019",
            apn_time: "01:00",
            dr_name: "Dr. K.N. Mishra",
            lab_test_status: "In-progress",
            type: "OPD",
            payment_status: "true"
        }),
        new Appointment({
            apn_id: "APN910",
            pt_id : "P010",
            apn_date:"23-11-2019",
            apn_time: "02:30",
            dr_name: "Dr. S. Murthy",
            lab_test_status: "Pending",
            type: "OPD",
            payment_status: "false"
        })
    ];
    
    for (var i = 0; i<Appointments.length; i++){
        Appointments[i].save();
    }
});



