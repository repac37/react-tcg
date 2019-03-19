import React from 'react';
import cssStyles from './BuildControl.module.css';

const buildControl = (props) => {
    return(
    <div className={cssStyles.BuildControl}>
        <div className={cssStyles.Label}>
            {props.label}
        </div>
        <button onClick={props.remove} className={cssStyles.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.added} className={cssStyles.More}>More</button>
    </div>
    )
    };

export default buildControl;