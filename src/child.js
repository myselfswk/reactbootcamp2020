import React from 'react';
import './App.css';

//props is an argument of child which has the type object
function Child(props) {
    return (
        <div>
            <h2>This is Child tag, {props.childName}</h2>
            <h3>This is Child tag, {props.childValue}</h3>
            <hr />
        </div>
    );
}

export default Child;