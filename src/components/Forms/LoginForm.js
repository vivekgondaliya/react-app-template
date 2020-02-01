import React, { Component } from 'react'

class LoginForm extends Component{
    state = {}
    
    //minimize the use of ref - use scarcely
    email = React.createRef();
    password = React.createRef();

    // componentDidMount(){
    //     this.email.current.focus();
    // }

    //get form values
    handleSubmit = e => {
        e.preventDefault();

        //call server
        console.log("Form Submitted");
    }

    render(){
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
                            />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
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