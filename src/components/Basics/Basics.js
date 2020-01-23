import React, { Component } from "react";

export default class Basics extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    };

    render() {

        const { values } = this.props;

        return (
            <div className="form">

                <div className="top-form mb-4">
                    <div className="number">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="text">
                        <div>Basic</div>
                        <div>Contacts</div>
                        <div>Avatar</div>
                        <div>Finish</div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="firstName">First name</label> <br/>
                    <input
                        type="text"
                        id="firstName"
                        className="form-input w-100 p-2"
                        placeholder="Enter first name"
                        value={values.firstName}
                        name="firstName"
                        onChange={() => this.props.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last name</label> <br/>
                    <input
                        type="text"
                        id="lastName"
                        className="form-input w-100 p-2"
                        placeholder="Enter last name"
                        value={values.lastName}
                        name="lastName"
                        onChange={() => this.props.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label> <br/>
                    <input
                        type="text"
                        id="password"
                        className="form-input w-100 p-2"
                        placeholder="Enter password"
                        value={values.password}
                        name="password"
                        onChange={() => this.props.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password</label> <br/>
                    <input
                        type="password"
                        id="repeatPassword"
                        className="form-input w-100 p-2"
                        placeholder="Enter repeat password"
                        value={values.repeatPassword}
                        name="repeatPassword"
                        onChange={() => this.props.handleChange}/>
                </div>

                <fieldset className="form-group">
                    <div>Gender</div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="male"
                            name={values.gender}
                            id="male"
                            checked={this.props.gender === 'male'}
                            onChange={() => this.props.handleChangeGender}/>
                        <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            value="female"
                            name={values.gender}
                            id="female"
                            checked={this.props.gender === 'female'}
                            onChange={() => this.props.handleChangeGender}/>
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                </fieldset>


                <div className="btn-group d-flex justify-center">
                    <button className="btn">Previous</button>
                    <button onClick={this.saveAndContinue} className="btn btn-secondary">Next</button>
                </div>
            </div>
        );
    };
};
