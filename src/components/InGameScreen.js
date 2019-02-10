import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MastermindRow from './MastermindRow';
import { colors } from './Datas.js';
import { END_GAME } from '../App.js';
import PropTypes from 'prop-types';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e74c3c;
  height: 100vh;
  width: 100vw;
  justify-content: center;
`;

export const incrementIndexRowToGuess = prevState => ({
  indexRowToGuess: prevState.indexRowToGuess + 1,
});

export default class InGameScreen extends PureComponent {
  state = {
    indexRowToGuess: 0,
    colorsToGuess: ['', '', '', '', ''],
    isWon: false,
  };

  generateRandomColor() {
    const { colorsToGuess } = this.state;
    const tabColors = colorsToGuess.map(() => {
      return colors[Math.floor(Math.random() * colors.length)];
    });

    this.setState({
      colorsToGuess: tabColors,
    });
  }

  componentDidMount() {
    this.generateRandomColor();
  }

  componentDidUpdate() {
    const { isWon, indexRowToGuess } = this.state;
    if (isWon) {
      this.props.changeGameState(END_GAME, true);
    }
    if (indexRowToGuess > 11) {
      this.props.changeGameState(END_GAME, false);
    }
  }

  changeRowToGuess() {
    this.setState(incrementIndexRowToGuess);
  }

  setGameIsWon() {
    this.setState({ isWon: true });
  }

  render() {
    const { indexRowToGuess, tabAuditors, colorsToGuess, isWon } = this.state;
    const winScreen = isWon ? <div>Tu as gagné !</div> : null;
    return (
      <GameContainer>
        {winScreen}
        <MastermindRow
          indexRow={0}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={1}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={2}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={3}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={4}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={5}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={6}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={7}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={8}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={9}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={10}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
        <MastermindRow
          indexRow={11}
          indexRowToGuess={indexRowToGuess}
          changeRowToGuess={this.changeRowToGuess.bind(this)}
          tabAuditors={tabAuditors}
          colorsToGuess={colorsToGuess}
          setGameIsWon={this.setGameIsWon.bind(this)}
          isWon={isWon}
        />
      </GameContainer>
    );
  }
}

InGameScreen.propTypes = {
  changeGameState: PropTypes.func,
};
