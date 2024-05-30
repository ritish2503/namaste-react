import React from "react";
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', {id: 'heading'}, 'Hello React');
        
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//Nested Elements
// const parent = React.createElement('div', {id: 'parent'},
//     React.createElement('div', {id: 'child'},
//     React.createElement('h1', {id: 'heading'}, 'I am a h1 tag'))
// );

//Nested siblings
const parent = React.createElement('div', {id: 'parent'},
    React.createElement('div', {id: 'child'},
    [React.createElement('h1', {id: 'heading'}, 'I am a h1 tag'),React.createElement('h2', {id: 'heading2'}, 'I am a h2 tag')])
);

root.render(parent);