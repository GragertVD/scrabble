import React from 'react'
import styles from "./style.module.scss"
import BoardCell from '../BoardCell';

const Board = () => {
  const boardCell = Array(225).fill(0).map((_, i) => i + 1);

  return (
    <div className={styles.board}>
      {
        boardCell.map((numCell) =>
          <BoardCell key={numCell} id={numCell} />
        )
      }
    </div>
  )
}

export default Board
