import React, {Component} from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

import './App.css';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor() {
    super();

    this.state = {
      selColorIdx: 0,
      guesses: [this.getNewGuess(), this.getNewGuess(), this.getNewGuess(), this.getNewGuess()],
      code: this.genCode()
    };
  }

  genCode(){
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
  }

  getNewGuess() {
    return {
      code: [3, 2, 1, 0],
      score: {
        perfect: 0,
        almost: 0
      }
    }
  }

  getWinTries() {
    // if winner, return num guesses, otherwise 0 (no winner)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
  }

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        Selected color: {colors[this.state.selColorIdx]}
        <header className="App-header">React Mastermind</header> 
        <div className="flex-h">
          <GameBoard 
            colors={colors} 
            guesses={this.state.guesses}
          />
          <div className="sidebar">
            <ColorPicker 
              colors={colors} 
              selColorIdx={this.state.selColorIdx}
            />
            <GameTimer/>
            <NewGameButton/>
          </div>
        </div>
        <footer>{(winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!')}</footer>
      </div>
    );
  }
}

export default App;
