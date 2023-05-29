import React from 'react';
import '@fontsource/roboto';
import { useState, useEffect } from 'react'
import './App.css';
import {Header} from './Components/header/Header';
import {Main} from './Components/main/Main';
import {Footer} from './Components/footer/Footer'
// import data from './mock.json';
import { BrowserRouter } from 'react-router-dom'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState);
// так как локал сторэдж хранится строковые данные, а мы пытаемся запиать объект поэтому нужен перевод 
  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]) // если любое из этих зависимостий tasks изменитс то ререндеринг выполнится как нужно

return (
  <>
  <BrowserRouter>
  <div className='wrapper-content'>
  <Header />
  <Main tasks={tasks} setTasks={setTasks}/>
  <Footer tasks={tasks} />
  </div>
  </BrowserRouter>
  </>
)
}

export default App;
