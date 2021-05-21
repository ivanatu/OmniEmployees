import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            country: "",
            firstname: "",
            lastname: "",
            dateOfBirth: "",
            status: "",
            socialInsurance: "",
            noChildren: "",
            workingHours: "",
            holiday: "",
        };

    }

    handleSubmit = (event) => {
        event.preventDefault();
       
        const country = (event.target.country !== undefined) ? event.target.country.value : ""
        const firstname = (event.target.firstname !== undefined) ? event.target.firstname.value : ""
        const lastname = (event.target.lastname !== undefined) ? event.target.lastname.value : ""
        const dateOfBirth = (event.target.dateOfBirth !== undefined) ? event.target.dateOfBirth.value : ""
        const status = (event.target.status.value !== undefined) ? event.target.status.value : ""
        const socialInsurance = (event.target.socialInsurance !== undefined) ? event.target.socialInsurance.value : ""
        const noChildren = (event.target.noChildren !== undefined) ? event.target.noChildren.value : ""
        const workingHours = (event.target.workingHours !== undefined) ? event.target.workingHours.value : ""
        const holiday = (event.target.age !== undefined) ? event.target.age.value : ""

        var items = []
        items.push({ country, firstname, lastname, dateOfBirth, status, socialInsurance, noChildren, workingHours, holiday });
        console.log("EMployee ", items);
      
        this.setState({
            country: "",
            firstname: "",
            lastname: "",
            dateOfBirth: "",
            status: "",
            socialInsurance: "",
            noChildren: "",
            workingHours: "",
            holiday: "",
            items:items
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        })
    }

    render() {

        return (
            <div>
                <div className="login">
                    <div className="login-screen">
                        <div className="app-title">
                            <h1>New Employee</h1>
                        </div>

                        <div className="login-form">
                            <form method="POST" id="login_form" name="login_form" className="register-form"
                                onSubmit={event => this.handleSubmit(event)}>

                                <div className="dropdown">

                                    <p>
                                        <select id="country" value={this.state.country} name="country"
                                            onChange={this.handleChange} required>
                                            <option value="">country</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Brazil">Brazil</option>
                                        </select>
                                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label></p>

                                </div>
                                <div className="control-group">

                                    <input type="text" className="login-field" placeholder="First name" id="firstname"
                                        name="firstname" value={this.state.firstname} onChange={this.handleChange} required />
                                    <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="login-field" placeholder="Last name" id="lastname" name="lastname"
                                        value={this.state.lastname} onChange={this.handleChange} required />
                                    <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                </div>
                                <div className="control-group">
                                    <input type="date" className="login-field" placeholder="Date of birth" id="dateOfBirth" name="dateOfBirth"
                                        value={this.state.dateOfBirth} onChange={this.handleChange} required />
                                    <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                </div>

                                {((this.state.country === "Spain") || (this.state.country === "Ghana")) ? (
                                    <div className="control-group">
                                        <input type="text" className="login-field" placeholder="Marital Status" id="status" name="status"
                                            value={this.state.status} onChange={this.handleChange} required />
                                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                    </div>
                                ) : (null)}

                                {this.state.country === "Spain" ? (
                                    <div className="control-group">
                                        <input type="number" className="login-field" placeholder="Social insurance number" id="socialInsurance" name="socialInsurance"
                                            value={this.state.socialInsurance} onChange={this.handleChange} min="0" required />
                                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                    </div>
                                ) : (null)}

                                {this.state.country === "Ghana" ? (
                                    <div className="control-group">
                                        <input type="number" className="login-field" placeholder="Number of children" id="noChildren" name="noChildren"
                                            value={this.state.noChildren} onChange={this.handleChange} min="0" required />
                                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                    </div>
                                ) : (null)}

                                {this.state.country === "Brazil" ? (
                                    <div className="control-group">
                                        <input type="number" className="login-field" placeholder="Working hours" id="workingHours" name="workingHours"
                                            value={this.state.workingHours} onChange={this.handleChange} min="0" required />
                                        <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                                    </div>
                                ) : (null)}

                                {this.state.country === "Spain" ?
                                    <div className="control-group">
                                        <input type="number" className="login-field" placeholder="Holiday Allowance" id="holiday" name="holiday"
                                            value={this.state.holiday} onChange={this.handleChange} min="30" required />
                                    </div>
                                    : (this.state.country === "Brazil" ?

                                        <div className="control-group">
                                            <input type="number" className="login-field" placeholder="Holiday Allowance" id="holiday" name="holiday"
                                                value={this.state.holiday} onChange={this.handleChange} min="0" max="40" required />
                                        </div>
                                        :
                                        <div className="control-group">
                                            <input type="number" className="login-field" placeholder="Holiday Allowance" id="holiday" name="holiday"
                                                value={this.state.holiday} onChange={this.handleChange} min="0" required />
                                        </div>
                                    )
                                }

                                <button type='submit' className="btn btn-primary">SAVE</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;