import React, { Component } from 'react'
import Input from './Input';

class LoginForm extends Component{
    state = {
        account: {
            email: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        //call server
        console.log("Form Submitted", this.state.account);
    }

    handleChange = ({ currentTarget : input }) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({ account });
    }

    render(){
        const { account } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        name="email"
                        label="Email" 
                        value={account.email}
                        onChange={this.handleChange}
                        placeholderText="Enter email"
                    />
                    <Input 
                        name="password"
                        label="Password" 
                        value={account.password}
                        onChange={this.handleChange}
                        placeholderText="Password"
                    />
                    <button className="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }
}

export default LoginForm;