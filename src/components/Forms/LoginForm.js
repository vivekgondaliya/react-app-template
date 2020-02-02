import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';

//GOAL: validating a field using joi
class LoginForm extends Component{
    state = {
        account: {
            email: "",
            password: ""
        },
        errors: {}
    }

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password')
    }

    validate = () => {
        const options = { abortEarly : false };
        const { error } = Joi.validate(this.state.account, this.schema, options);
        if(!error)return null;

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name] : value };
        const schema = { [name] : this.schema[name]};
        const { error } = Joi.validate(obj, schema);
    
        return error ? error.details[0].message : null; 
    }

    handleSubmit = e => {
        e.preventDefault();
        
        //validate input fields
        const errors = this.validate();
        this.setState({ errors : errors || {} });

        //return if errors
        if(errors) return;

        //call server
        console.log("Form Submitted", this.state.account);
    }

    handleChange = ({ currentTarget : input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;

        this.setState({ account, errors });
    }

    render(){
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="email"
                        label="Email" 
                        value={account.email}
                        error={errors.email}
                        onChange={this.handleChange}
                        placeholderText="Enter email"
                    />
                    <Input 
                        name="password"
                        label="Password" 
                        value={account.password}
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