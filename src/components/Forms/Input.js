import React from 'react'

const Input = ({ name, label, value, onChange, placeholderText }) => {
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
        </div>
    );
}

export default Input;