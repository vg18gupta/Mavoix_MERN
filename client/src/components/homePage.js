import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form'


    class homePage extends Component {
        constructor(props) {
            super(props)
            this.state = {
                value: '',
                error: null,
                Appoinment: [],
                Patient: []
            };
    }

    handleChange = (event) =>
    {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        alert('submitted' + this.state.value);
        event.preventDefault();
        console.log("phone number",this.state.value);
        const num = this.state.value;
        console.log(num);
         fetch("http://localhost:4000/appointment/" + num)
             .then(res => res.json())
             .then((result) => {
                 console.log(result[0]) 
                 this.setState({
                     Appoinment: result[0]
                 })
             })

    }
    handleSubmitp = (event) => {
        alert('submitted' + this.state.value);
        event.preventDefault();
        console.log("phone number",this.state.value);
        const num = this.state.value;
        console.log(num);
        fetch("http://localhost:4000/patient/" + num)
        .then(res => res.json())
        .then((resul) => {
            console.log(resul[0])
            this.setState({
                Patient: resul[0]
            })
        })
        }

    render (){
        return(
        <div className="container">
            <div className="box"  >
            <form onSubmit={this.handleSubmit}>
                <label>
                    Mobile Number:
                
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input variant="primary" type="submit" value="Application Details"/>
            </form>
            </div>

            {
                this.state.Appoinment ?
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th colSpan="2">Appointment details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Appoinment ID</td>
                        <td>{this.state.Appoinment.apn_id}</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Patient ID</td>
                        <td>{this.state.Appoinment.pt_id}</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td >Appoinment Date</td>
                        <td>{this.state.Appoinment.apn_date}</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td >Appointment Time</td>
                        <td>{this.state.Appoinment.apn_time}</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td >Doctor Name</td>
                        <td>{this.state.Appoinment.dr_name}</td>
                        </tr>
                        <tr>
                        <td>6</td>
                        <td >Lab Test Status</td>
                        <td>{this.state.Appoinment.lab_test_status}</td>
                        </tr>
                        <tr>
                        <td>7</td>
                        <td >Type</td>
                        <td>{this.state.Appoinment.type}</td>
                        </tr>
                        <tr>
                        <td>8</td>
                        <td >Payment Status</td>
                        <td>{this.state.Appoinment.payment_status}</td>
                        </tr>
                    </tbody>
                    </Table>
                    :
                    <h1>null </h1>
            }
             <div className="box1"  >
            <form onSubmit={this.handleSubmitp}>
                {/* <label>
                    Mobile Number:
                
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label> */}
                <input variant="primary" type="submit" value="Patient Details"/>
            </form>
            </div>
            {
                this.state.Patient ?
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th colSpan="2">Patient details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Patient ID</td>
                    <td>{this.state.Patient.pt_id}</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Mobile Number</td>
                    <td>{this.state.Patient.mob_number}</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td >Registration Date</td>
                    <td>{this.state.Patient.reg_date}</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td >Registration Time</td>
                    <td>{this.state.Patient.reg_time}</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td >Patient Name</td>
                    <td>{this.state.Patient.pt_name}</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td >Gender</td>
                    <td>{this.state.Patient.gender}</td>
                    </tr>
                    <tr>
                    <td>7</td>
                    <td >Age</td>
                    <td>{this.state.Patient.age}</td>
                    </tr>
                    <tr>
                    <td>8</td>
                    <td >Location</td>
                    <td>{this.state.Patient.location}</td>
                    </tr>
                </tbody>
                </Table>
                :
                <h1>null</h1>
            }
            
        </div>
        );
    }

}

export default homePage;