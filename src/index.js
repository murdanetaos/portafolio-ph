import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './component/Styles/GlobaStyle';
import './index.css'; 
import '@fontsource/roboto'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);
