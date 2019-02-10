import React, { memo } from 'react';
import { IN_GAME } from '../App.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
  font-family: 'Airfool';
  font-size: 10em;
`;

const StartScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e74c3c;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const RulesContainer = styled.div`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  font-family: 'Ubuntu', sans-serif;
`;

const StartButton = styled.button`
  background-color: #2ecc71;
  border-style: none;
  width: 10vw;
  font-size: 30px;
  padding: 20px
  color: white;
  transition: 0.2s;
  border-radius: 20px;  
  font-family: 'Ubuntu', sans-serif;
  &:hover {
    cursor: pointer;
    background-color: #27ae60;
    transition: 0.2s;
  }
  &:active {
    transition: 0.2s;
    background-color: #16a085;
  }
`;

const IndicatorContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
`;

const ColorIndicator = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  margin: 0 auto;
  border: solid 5px #ecf0f1;
  border-radius: 100px;
  background-color: ${props => props.color};
`;

const StartScreen = props => {
  function startGame() {
    props.changeGameState(IN_GAME, false);
  }

  return (
    <StartScreenContainer>
      <Title>MASTERMIND</Title>
      <RulesContainer>
        <p>To win the game, you have to guess a combination of 5 colors.</p>
        <p>
          If after 12 tries you still have not found the combination, you lost.
        </p>
        <IndicatorContainer>
          <ColorIndicator color="#2ecc71" />
          <ColorIndicator color="#e67e22" />
        </IndicatorContainer>
        <p>
          A green indicator appears when you have found the right color in the
          right place.
        </p>
        <p>
          An orange indicator appears when you have found the right color but
          not the right place.
        </p>
      </RulesContainer>
      <StartButton onClick={startGame}>START</StartButton>
    </StartScreenContainer>
  );
};

export default memo(StartScreen);

StartScreen.propTypes = {
  changeGameState: PropTypes.func,
  color: PropTypes.string,
};
