import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <form className="generic-form">
            <h1 className="generic-form-title">Form Title</h1>
            
            <label className="generic-form-label">Label 1</label>
            <input className="generic-form-input" type="text" placeholder="Placeholder 1"/>

            <button className="generic-form-button" type="submit">Submit</button>
        </form>
    )
}

export default Form
