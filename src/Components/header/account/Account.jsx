import React from 'react';
import './Account.css';
import avatar from '../../../Images/user-avatar.png';

export default function Account() {
    const [state, setState] = React.useState(true);

    return (
        <>
            <div className='wrap'>
                <button className='btn'
                    onClick={() => {
                        setState(!state)
                    }} >
                    <img className='img-avatar'
                        src={avatar}
                        alt='avatar' />
                </button>
                <span className={
                    state ? 'arrow' : 'arrow is-active'
                }
                    onClick={() => {
                        setState(!state)
                    }}
                ></span>
            </div>

            <nav className={state ? 'dropdown-menu' : 'dropdown-menu is-active'}>
                <ul className='list'>
                    <li>
                        <a className='link'
                            onFocus={() => {
                                setState(!state)
                            }} href='/' >
                            Profile
                        </a>
                    </li>

                    <li>
                        <a className='link'
                            onBlur={() => {
                                setState(!state)
                            }} href='/' >
                            Log Out
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}