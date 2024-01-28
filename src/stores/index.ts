import { makeAutoObservable } from 'mobx';
import shuffle from '../utils/shuffle';

class MainStore {
  bankLetters = ('аааааааааа' +
    'ббб' +
    'ввввв' +
    'ггг' +
    'ддддд' +
    'еееееееее' +
    'жж' +
    'зз' +
    'ииииииии' +
    'йййй' +
    'кккккк' +
    'лллл' +
    'ммммм' +
    'нннннннн' +
    'оооооооооо' +
    'пппппп' +
    'рррррр' +
    'сссссс' +
    'ттттт' +
    'ууу' +
    'ф' +
    'хх' +
    'ц' +
    'чч' +
    'ш' +
    'щ' +
    'ъ' +
    'ыы' +
    'ьь' +
    'э' +
    'ю' +
    'яяя' +
    '***').split('')

  userLetters: string[] = []

  constructor() {
    this.bankLetters = shuffle(this.bankLetters)
    makeAutoObservable(this)
  }

  get getLetter(){
    return this.bankLetters.pop()
  }

  topUpUserLetters = () => {
    while (this.userLetters.length<10) {
      const letter = this.bankLetters.pop()
      if(letter)
        this.userLetters.push(letter)
    }
  }

}

export default MainStore