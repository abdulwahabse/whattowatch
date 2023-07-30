import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import ScrollToTop from './react/components/common/ScrollToTop.jsx';
import './styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename={'/whattowatch'}>
            <ScrollToTop />
            <App />
        </Router>
    </React.StrictMode>
);
