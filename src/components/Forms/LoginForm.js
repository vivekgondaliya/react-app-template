import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';
import Form from './Form';

//GOAL: resusable form component
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
            password: ""
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        //call server
        console.log("Form Submitted", this.state.data);
    }

    render(){
        const { data, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="email"
                        label="Email" 
                        value={data.email}
                        error={errors.email}
                        onChange={this.handleChange}
                        placeholderText="Enter email"
                    />
                    <Input 
                        name="password"
                        label="Password" 
                        value={data.password}
                        error={errors.password}
                        onChange={this.handleChange}
                        placeholderText="Password"
                    />
                    <button
                        disabled={this.validate()} 
                        className="btn btn-primary">Login</button>
                    </form>
            </div>
        )
    }
}

export default LoginForm;