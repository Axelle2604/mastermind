import React, { PureComponent } from 'react';
import './App.css';
import StartScreen from './components/StartScreen';
import InGameScreen from './components/InGameScreen';
import EndScreen from './components/EndScreen';

const START_GAME = 'startGame';
export const IN_GAME = 'inGame';
export const END_GAME = 'endGame';

class App extends PureComponent {
  state = {
    stateGame: START_GAME,
    isWon: false,
  };

  changeGameState(gameState, isWon) {
    this.setState({
      stateGame: gameState,
      isWon: isWon,
    });
  }

  render() {
    const { stateGame, isWon } = this.state;
    const startGameScreen = stateGame === START_GAME && (
      <StartScreen changeGameState={this.changeGameState.bind(this)} />
    );
    const inGameScreen = stateGame === IN_GAME && (
      <InGameScreen changeGameState={this.changeGameState.bind(this)} />
    );
    const endScreen = stateGame === END_GAME && (
      <EndScreen
        changeGameState={this.changeGameState.bind(this)}
        isWon={isWon}
      />
    );
    const screen = startGameScreen || inGameScreen || endScreen;
    return <div className="App">{screen}</div>;
  }
}

export default App;
