import React from 'react';
import './Toolbar.css';

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <div className="Toolbar-logo">
            </div>
            <a href="/message/new" className='button' ><span>Add new post</span></a>
        </header>
    );
};

export default Toolbar;