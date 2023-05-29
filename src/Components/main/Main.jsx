import React from 'react';
import './style.css';
import {Board} from '../board/Board';
import {Route, Routes} from 'react-router-dom';
import { TaskDetail } from '../taskDetail/TaskDetail';

export const Main = props => {
    return (
        <main className='main'>
            <Routes>
            <Route path='/' element={<Board {...props} />} />
            <Route path='/tasks/:taskId' element={<TaskDetail {...props} />} />
            </Routes>
        </main>
    )
}