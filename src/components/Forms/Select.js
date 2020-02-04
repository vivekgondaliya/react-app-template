import React from 'react'

const Select = ({ name, label, options, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                {...rest}
                name={name}
                id={name}
                className="form-control"ß
            >
                <option value="" />
                {
                    options.map(option => (
                        <option key={option} value={option} >{option}
                        </option>
                    ))
                }
            </select>
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            {error && 
                <div className="alert alert-danger">
                    {error}
                </div>
            }
        </div>
    );
}

export default Select;