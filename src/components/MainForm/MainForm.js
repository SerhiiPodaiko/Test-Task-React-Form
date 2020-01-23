import React, { Component } from "react";

import Basics from "../Basics";
import Contacts from "../Contacts";
import Avatar from "../Avatar";
import Finish from "../Finish";

export default class MainForm extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            firstName: null,
            lastName: null,
            password: null,
            repeatPassword: null,
            gender: null,
            agree: null,
            email: '',
            numbers: '',
            errors: {
                firstName: false,
                lastName: false,
                password: false,
                repeatPassword: false
            }
        };
    }

    nextStep = () => {
      const { step } = this.state;
      this.setState({
         step: step + 1
      });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        });
    };

    handleChangeGender = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        });
    };

    render() {

        const { step, firstName, lastName, password, repeatPassword, gender, email, number, errors } = this.state;
        const values = { firstName, lastName, password, repeatPassword, email, number };

        switch (step) {
            case 1:
                return (
                    <Basics
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    errorValues={errors}
                    gender={gender}
                    handleChangeChek={this.handleChangeGender}/>
                );

            case 2:
                let styleBasics = {
                  background: '#FF542D'
                };
                let styleContacts = {
                  background: '#55FFDD',
                    border: '4px solid #FF542D'
                };
                return (
                    <Contacts
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errorValues={errors}
                        styleContacts={styleContacts}
                        styleBasics={styleBasics} />
                );

            case 3:
                return (
                    <Avatar
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errorValues={errors} />
                );

            case 4:
                return (
                    <Finish
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errorValues={errors} />
                );
        }
    }
};
