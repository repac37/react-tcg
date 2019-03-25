import React from 'react';
import cssStyle from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) =>(
    <React.Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} ></Backdrop>
    <div
        className={cssStyle.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1':'0'
        }}>
        {props.children}
    </div>
    </React.Fragment>
);
export default modal;