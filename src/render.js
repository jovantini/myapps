import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


export let rerenderEntireTree = (state, addPost, updateNewPostText) => {
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText} />
            
        </React.StrictMode>
    );

    
    reportWebVitals();
}


