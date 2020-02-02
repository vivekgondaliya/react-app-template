import React from 'react'

const Input = ({ name, label, placeholderText, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                placeholder={placeholderText}
                name={name}
                id={name}
                className="form-control"ß
            />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            {error && 
                <div className="alert alert-danger">
                    {error}
                </div>
            }
        </div>
    );
}

export default Input;