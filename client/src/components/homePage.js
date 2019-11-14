import React, { Component } from 'react'

 class homePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            error: null,
            Appoinment: []
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
        //console.log(num);
        fetch("http://localhost:4000/patients/" + num)
            .then(res => res.json())
            .then((result) => {
                console.log(result[0])
                this.setState({
                    Appoinment: result[0]
                 })
                })
                //console.log(Appoinment.pt_id)
    }


    render (){
        return(
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Mobile Number:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit" />
            </form>
            {
                this.state.Appoinment ?
                <div className="comtainer">
                    <h1>{this.state.Appoinment.apn_date}</h1>                
                    <h1>{this.state.Appoinment.pt_id}</h1>
                </div>
                    :
                    <h1>null </h1>
            }
            
        </div>
        );
    }

}

export default homePage;