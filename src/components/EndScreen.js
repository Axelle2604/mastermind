import React, { memo } from 'react';
import styled from 'styled-components';
import { IN_GAME } from '../App.js';
import PropTypes from 'prop-types';

const EndGameContainer = styled.div`
  background-color: #e74c3c;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Ubuntu', sans-serif;
`;

const TextContainer = styled.div`
  font-size: 50px;
`;

const RestartButton = styled.button`
  background-color: #2ecc71;
  border-style: none;
  font-size: 30px;
  color: white;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    background-color: #27ae60;
  }
`;

const EndScreen = props => {
  function restartGame() {
    props.changeGameState(IN_GAME, false);
  }

  const endGame = props.isWon ? (
    <TextContainer>Tu as gagné !</TextContainer>
  ) : (
    <TextContainer>Tu as perdu !</TextContainer>
  );

  return (
    <EndGameContainer>
      {endGame}
      <br />
      <RestartButton onClick={restartGame}>Rejouer ?</RestartButton>
    </EndGameContainer>
  );
};

export default memo(EndScreen);

EndScreen.propTypes = {
  changeGameState: PropTypes.func,
  isWon: PropTypes.bool,
};
