import React, { Component } from "react";

export default class Contacts extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    };

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    };


    render() {

        const { values } = this.props;

        return (
            <div className="form">

                <div className="top-form mb-4">
                    <div className="number">
                        <div style={this.props.styleBasics}>1</div>
                        <div style={this.props.styleContacts}>2</div>
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
                    <label htmlFor="email">Email</label> <br/>
                    <input
                        type="email"
                        id="email"
                        className="form-input w-100 p-2"
                        placeholder="Enter email"
                        value={values.email}
                        name="firstName"
                        onChange={() => this.props.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Mobile</label> <br/>
                    <input
                        type="mobile"
                        id="lastName"
                        className="form-input w-100 p-2"
                        placeholder="Enter mobile"
                        value={values.lastName}
                        name="lastName"
                        onChange={() => this.props.handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="country">Country</label> <br/>
                    <select className="form-control" name="country" id="country">
                        <option>Ukraine</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Spain</option>
                        <option>USA</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select className="form-control" id="city">
                        <option>Kyiv</option>
                        <option>Lviv</option>
                        <option>Odessa</option>
                        <option>Dnipro</option>
                        <option>Kharkiv</option>
                    </select>
                </div>

                <div className="btn-group d-flex justify-center">
                    <button onClick={this.back} className="btn">Previous</button>
                    <button onClick={this.saveAndContinue} className="btn btn-secondary">Next</button>
                </div>
            </div>
        );

    }
};
