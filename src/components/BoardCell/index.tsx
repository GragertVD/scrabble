import React, { FC } from 'react'
import style from './style.module.scss';
import { bonusCell } from '../../utils/const/bonusCell';

interface BoardCellProps {
  id: number;
}

const BoardCell: FC<BoardCellProps> = ({ id }) => {
  return (
    <div className={style.cell}>
      {
        bonusCell.letter2.includes(id) && 'x2' ||
        bonusCell.letter3.includes(id) && 'x3' ||
        bonusCell.word2.includes(id) && 'x2x' ||
        bonusCell.word3.includes(id) && 'x3x' ||
        '.'
      }
    </div>
  )
}

export default BoardCell