import React from 'react';
import Homepage from './Components/Homepage'
import classes from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className={classes.mainContainer}>
        <div className={classes.heading}>
          <h1>My Move Plans</h1>
        </div>
        <div className={classes.Homepage}>
          <Homepage />
        </div>

      </div>
    );
  }
}

export default App; 