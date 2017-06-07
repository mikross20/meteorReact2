import React from 'react';
import AccountsUI from '../AccountsUI.jsx';
import Footer from '../footer.jsx';
import Menu from './menu/menu.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <header>
            <h2><a href="/">My Resolution</a></h2>
            <AccountsUI />
            <Menu />
        </header>
        <main>
            {content}
        </main> 
        <footer>
            <Footer/>
        </footer>
    </div>
)