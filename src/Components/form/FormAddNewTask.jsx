import React from 'react';
import './style.css';
import {useState} from 'react'

export const FormAddNewTask = props => {
    const { addNewTask, setFormVisible } = props

    const [ values, setValues ] = useState({
        title: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.title) {
            addNewTask(values.title, values.description)
        }
        setFormVisible(false)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                className='input'
                id='taskTitle'
                name='title'
                type='text'
                value={values.title}
                onChange={handleChange}
                placeholder="New task title ..."
    />
    <button className='submit' type='submit'>Submit</button>
</form>
    )
}