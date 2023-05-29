import React from 'react';
import { useState } from 'react';
import './style.css';
import { useParams, useNavigate } from 'react-router-dom';

export const TaskDetail = props => {
    const { tasks, setTasks } = props
    const { taskId } = useParams()
    const navigate = useNavigate();

    const task = tasks.find(task => task.id === taskId)
    console.log(task)
    // объект в котором хранятся все данные о задаче и теперь мы можем егот везде использовать 

    const [description, setDescription] = useState(
        task.description ? task.description : 'This task has no description')

    const addDescription = () => {
        const tasksCopy = tasks.map(task => {
            if (task.id === taskId) {
                task.description = description;
            }
            return task;
        })
        setTasks(tasksCopy)
    }

    return (
        <div className='wrapper'>
            <div className='header'>
                <h2 className='title'>{task.title}</h2>
                <textarea className='textarea'
                    onFocus={() => {
                        description === 'This task has no description' &&
                            setDescription('')
                    }}
                    onChange={e => {
                        setDescription(e.target.value)
                    }}
                    value={description}
                    onBlur={addDescription}
                > </textarea>
                <button className='home-link' onClick={() => {
                    navigate(-1)
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                    >
                        <line
                            x1="1.35355"
                            y1="0.646447"
                            x2="24.3536"
                            y2="23.6464"
                            stroke="black"
                        />
                        <line
                            y1="-0.5"
                            x2="32.5269"
                            y2="-0.5"
                            transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
                            stroke="black"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}