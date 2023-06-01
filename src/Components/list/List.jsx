import React from 'react';
import './style.css';
import { useState } from 'react';
import { LIST_TYPES } from '../../config';
import { FormAddNewTask } from '../form/FormAddNewTask';
import { Link } from 'react-router-dom';

export const List = props => {
    const { type, title, tasks, addNewTask, prevTaskList, setTasks } = props;
    const [isFormVisible, setFormVisible] = useState(false)
    const [isSelectVisible, setSelectVisible] = useState(false)

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    const statusChange = (e, status) => {
        const taskList = JSON.parse(window.localStorage.getItem('tasks'));
        const taskCopy = taskList.map(task => {
            if (task.id === e.target.value) {
                task.status = status;
            }
            return task;
        })
        setTasks(taskCopy);
    }

    function handleSelect() {
        setSelectVisible(!isSelectVisible);
    }



    return (
        <div className='list-wrapper'>
            <h2 className='title-list'>{title}</h2>
            {tasks.map(task => {
                return (
                    <Link className='link-task' to={`/tasks/${task.id}`}>
                        <li key={task.id} className='task'>
                            {task.title}
                        </li>
                    </Link>
                )
            })}
            {type === LIST_TYPES.BACKLOG && (
                isFormVisible ?
                    <button className='disabled'>
                        +Add card
                    </button>
                    :
                    <button button className='button' onClick={handleClick} >
                        +Add card
                    </button>
            )}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
            )}

            {type !== LIST_TYPES.BACKLOG && (isSelectVisible ?
                <button className='disabled' disabled>
                    +Add card
                </button> : <button className='button' onClick={handleSelect}>+Add card</button>
            )}
            {type !== LIST_TYPES.BACKLOG && isSelectVisible &&
                <select className='select'
                    onChange={e =>
                        statusChange(e, type)
                    }
                >
                    <option value={'default'}>Select task</option>
                    {prevTaskList.map(task => {
                        return (
                            <option className='option' key={task.id} value={task.id}>
                                {task.title}
                            </option>
                        )
                    })}
                </select>
            }
        </div >
    )
}