import React from 'react';
import Board from './components/Board';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.AppContainer}>
      <Board />
    </div>
  );
}

export default App;
