import './style.css';
import { LIST_TYPES, LIST_COPY_TITLE } from '../../config';
import { List } from '../list/List'
import uniqid from 'uniqid';

export const Board = props => {
    const { tasks, setTasks } = props

    const addNewTask = (title, description) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description: description,
            created: new Date().toISOString(),
            status: LIST_TYPES.BACKLOG,
        }
        setTasks([...tasks, newTask])
    }

    const moveTask = Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type);

        const prevTaskList = tasks.filter(
            task =>
                task.status === Object.values(LIST_TYPES)[Object.values(LIST_TYPES).indexOf(type) - 1]
        )

        return (
            <div className='board'>
                <List
                    key={type}
                    type={type}
                    title={LIST_COPY_TITLE[type]}
                    tasks={listTasks || []}
                    addNewTask={addNewTask}
                    prevTaskList={prevTaskList}
                    setTasks={setTasks}
                />
            </div>
        )
    }
    )
    return <>
        {moveTask}</>
}