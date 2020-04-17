import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../../img/logo.svg';

const ReactExample = props =>
{
    let content =
    (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
    return content;
};

export default ReactExample;