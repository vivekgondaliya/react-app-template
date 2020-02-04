import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './Form';

//GOAL: helper rendering methods
/**
 * Future Forms
 * 
 * 1. init state - data
 * 2. set schema for form
 * 3. doSubmit() - call server
 * 4. render()
 * **/
class LoginForm extends Form{
    state = {
        data: {
            email: "",
            password: "",
            gender:""
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password'),
        gender: Joi.string().required().label("Gender")
    }

    doSubmit = () => {
        //call server
        console.log("Form Submitted", this.state.data);
    }

    render(){
        const gender = ["Male", "Female"]
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email" , "Email", "Enter email")}
                    {this.renderInput("password" , "Password", "Password", "password")}
                    {this.renderSelect("gender", "Gender", gender)}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}

export default LoginForm;