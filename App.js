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
// const parent = React.createElement('div', {id: 'parent'},
//     React.createElement('div', {id: 'child'},
//     [React.createElement('h1', {id: 'heading'}, 'I am a h1 tag'),React.createElement('h2', {id: 'heading2'}, 'I am a h2 tag')])
// );

// React Element
const heading = (
    <h1 className="heading">Namaste React using JSX - React Element</h1>
)

root.render(heading);

//React Component
const Heading = () => (
    <div>
        {heading}   {/*This is how we can use an element inside an component */}
        <h1>Namaste React using JSX - React Component</h1>
    </div>
)

root.render(<Heading />)