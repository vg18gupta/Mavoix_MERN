const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Patient = require('./model/patientModel')
const Appointment = require('./model/appointmentModel')
const {serverError}  = require('./util/error')

const router = require('express').Router();

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//mongoose.connect('localhost:27017/patient');


app.get("/patients/:phone", (req, res)=>{
    // console.log("hit")
    // res.json("hello");
    let{ phone } = req.params
    console.log(phone);
    Patient.find({mob_number: phone})
        .then(patient => {
           // console.log("dsds",patient)
            if(!patient){
                res.status(200).json({
                    message: "No patient Found"
                      })
            }else {
               // res.status(200).json(Patient)
                //console.log("efWF",patien)
                Appointment.find({pt_id: patient[0].pt_id})
                .then(appointment=>{
                    console.log("addf",appointment)
                    if(!appointment){
                        res.status(200).json({
                            message: "not found"
                        })
                    }
                    else{
                        res.status(200).json(appointment);
                    }
                })     
            }
            })
        .catch(error => serverError(res, error))
});




app.get('/', (req, res) => {
    res.json({
        message: 'Welcome To Our Application'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER is RUNNING ON PORT ${PORT}`)  
    mongoose.connect('mongodb://localhost:27017/patient',
        { useNewUrlParser: true },
        () => {
        console.log('Database Connected...')
    });
})
