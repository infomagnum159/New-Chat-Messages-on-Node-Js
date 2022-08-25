import React from 'react';

import './Layout.css';
import Toolbar from "../Toolbar/Toolbar";

const Layout = props => {
    return (
        <>
            <Toolbar/>
            <main className="Layout-Content">
                {props.children}
            </main>
        </>
    );
};

export default Layout;