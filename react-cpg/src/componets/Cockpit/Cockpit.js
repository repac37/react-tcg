import React, { useEffect, useRef, useContext } from "react";
import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext)

  useEffect(() => {
    console.log("[Cockpit.js] useEffect-----");
    toggleBtnRef.current.click();
    // Http request
    // const timer = setTimeout(() => {
    //   alert("Save data to cloud!");
    // }, 1000);
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] useEffect----- Clean up work");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect-----");
    return () => {
      console.log("[Cockpit.js] 2nd useEffect----- Clean up work");
    };
  });

  let classes = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.Red);
  }
  if (props.personsLength <= 1) {
    classes.push(styles.Bold);
  }
  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>this is working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        toggle persons
      </button>    
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
