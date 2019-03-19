import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
   
    return (
        <div className={styles[props.mode]}>
            <p onClick={props.click}>Im a {props.name} and I am {props.age} year old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;