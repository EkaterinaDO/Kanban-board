import React from 'react';
import './Header.css';
import Account from './account/Account'


export class Header extends React.Component {
    render() {
        return (
            <header className='header-content'>
                <h1 className='header-text'>Awesome Kanban Board</h1>
                <Account />
            </header>
        )
    }
}