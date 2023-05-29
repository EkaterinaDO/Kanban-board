import React from 'react';
import './style.css';

export const Footer = props => {

    const { tasks } = props
    return (
        <footer className='footer'>
            <div className='counts'>
                        <p>Active tasks: {tasks.filter(task => task.status === 'backlog').length} </p>
                        <p>Finished tasks: {tasks.filter(task => task.status === 'finished').length}</p>
            </div>
            <div className='copy'>
                <p>Created by Ekaterina Dolgikh / 2023
                </p>
            </div>
        </footer>
    )
}