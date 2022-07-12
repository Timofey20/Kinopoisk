import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router";

export const RouterComponent = () =>{
    const link = <Link to="/">Главная</Link>;
    <Router>
        <header>
            <nav>
                <ul>
                    <li>
                        {link}
                    </li>
                    <li>
                        <Link to="/about">Контакты</Link>
                    </li>
                    <li>
                        <Link to="/users">Пользователи</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </Router>




}
