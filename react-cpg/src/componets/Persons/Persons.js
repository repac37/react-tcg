import React, { PureComponent } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


class Persons extends PureComponent {
  // NEEDS INITIALIZED STATE
  // static getDerivedStateFromProps(props, state){
  //   console.log("[Persons.js]  getDerivedStateFromProps:::::");
  //   return state;
  // }

  // SHOULD NOT BE USED
  // componentWillReceiveProps(props){
  //    console.log('[Persons.js componentWillReceiveProps:::::)
  // }

  // you have to return true or false. And if you check all props for changes use PureComponent checks all props in the behind the scenes
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("[Persons.js] shouldComponentUpdate:::::'");
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((p, index) => {
      return (
        <ErrorBoundary key={p.id}>
          <Person
            mode="Person"
            click={this.props.clicked.bind(this, index)}
            name={p.name}
            age={p.age}
            changed={event => this.props.changed(event, p.id)}
          />
        </ErrorBoundary>
      );
    });
  }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount:::::");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate:::::");
    return { message: "snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate:::::");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount:::::Clean up work");
  }
}

export default Persons;
