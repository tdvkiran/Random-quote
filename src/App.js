import React from 'react';

import Card from './component/Card/Card'
import styles from './App.module.css';

class App extends React.Component {


  render() {
    return (
      <div className={ styles.container}>
        <div className={styles.card}>
          <Card />
        </div>
      </div>
    )
  }
}

export default App;
