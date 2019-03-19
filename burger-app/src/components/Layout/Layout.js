import React from "react";
import styles from "./Layout.module.css";

const layout = props => (
  <React.Fragment>
    <div>Toolbar, SibeDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
