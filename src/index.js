import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {WebSocketProvider} from "./components/context/WebSocketContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WebSocketProvider>
        <App/>
    </WebSocketProvider>
);
