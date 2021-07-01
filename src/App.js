import React from 'react';

import quote from './images/quote.png'
import Card from './component/Card/Card'
import styles from './App.module.css';

class App extends React.Component {


  render() {
    return (
      <div className={styles.container}>
        <img src={quote} alt="quote logo" />
        <div className={styles.card}>
          <Card />
        </div>
        <p className={ styles.footer}>©KiranTadisetti</p>
      </div>
    );
  }
}

export default App;
