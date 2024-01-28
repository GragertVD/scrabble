// type bonusCell = 'letter2' | 'letter3' | 'word2' | 'word3'

// interface Cell {
//   id: number
//   bonus: number
//   bonusType: 'word' | 'letter'
//   label: string
// }

// interface BonusCell implements  Cell{
//   bonusToWord: boolean
//   bonusToLetter: boolean
//   bonusCount: 2 | 3
// }

const bonusCell = {
  letter2: [4, 12],
  letter3: [21, 25],
  word2: [17, 29],
  word3: [1, 8, 15],
}


export { bonusCell }