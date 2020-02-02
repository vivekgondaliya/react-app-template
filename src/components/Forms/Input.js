import React from 'react'

const Input = ({ name, label, placeholderText, value, error, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={name} 
                className="form-control" 
                id={name} 
                aria-describedby="emailHelp" 
                placeholder={placeholderText}
                autoFocus
                value={value}
                onChange={onChange}
                name={name}
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