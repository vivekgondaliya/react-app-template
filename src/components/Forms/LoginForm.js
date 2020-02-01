import React, { Component } from 'react'

class LoginForm extends Component{
    state = {
        account: {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        //call server
        console.log("Form Submitted");
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
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            ref={this.email} 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            autoFocus
                            value={account.email}
                            onChange={this.handleChange}
                            name="email"
                            />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password" 
                            value={account.password}
                            onChange={this.handleChange}
                            name="password"
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
            </div>
        )
    }
}

export default LoginForm;