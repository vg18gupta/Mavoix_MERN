const Patient = require('./model/patientModel')
const Appointment = require('./model/appointmentModel')
const {serverError}  = require('./util/error')

const router = require('express').Router();


 
getSinglePatient =(req,res) =>{
    console.log("hit")
    // let {mob_number}  = req.params
    // console.log(mob_number);
    res.status(200).json({
        message: "hello"
    })
            // Patient.findById(mob_)
            //     .then(Patient => {
            //         if(!Patient){
            //             res.status(200).json({
            //                 message: "No patient Found"
            //             })
            //         }else {
            //             req.status(200).json(Patient)
            //         }
            //     })
            //     .catch(error => serverError(res, error))
}

router.get('/:mob_number', getSinglePatient())


