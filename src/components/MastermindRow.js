import React, { PureComponent } from 'react';
import Box from './Box';
import Auditor from './Auditor';
import { colors } from './Datas';
import * as StyleRow from './MastermindRowStyle';
import PropTypes from 'prop-types';

export const changeColorTab = indexBox => prevState => {
  const currentIndexColor = colors.indexOf(prevState.tabColors[indexBox]);
  const nextColorIndex =
    currentIndexColor === colors.length - 1 ? 0 : currentIndexColor + 1;
  const newTabColors = prevState.tabColors.map((color, index) =>
    indexBox === index ? colors[nextColorIndex] : color
  );

  return {
    tabColors: newTabColors,
  };
};

export const changeAuditorsTab = (indexAuditor, color) => prevState => {
  const newTabAuditors = prevState.tabAuditors.map((auditor, index) =>
    indexAuditor === index ? color : auditor
  );
  return { tabAuditors: newTabAuditors };
};

export default class MastermindRow extends PureComponent {
  state = {
    tabColors: ['white', 'white', 'white', 'white', 'white'],
    tabAuditors: ['white', 'white', 'white', 'white', 'white'],
    isRowToGuess: false,
  };

  static getDerivedStateFromProps(props) {
    if (props.indexRow === props.indexRowToGuess) {
      return { isRowToGuess: true };
    } else {
      return { isRowToGuess: false };
    }
  }

  changeBoxColor(indexBox) {
    if (this.state.isRowToGuess) {
      this.setState(changeColorTab(indexBox));
    }
  }

  checkColorsCombination() {
    const { tabColors } = this.state;
    tabColors.reduce((index, color) => {
      if (this.props.colorsToGuess.find(() => color)) {
        if (color === this.props.colorsToGuess[index]) {
          this.setState(changeAuditorsTab(index, 'green'), () =>
            this.checkGameIsWon()
          );
        } else {
          this.setState(changeAuditorsTab(index, 'orange'));
        }
      }
      return index + 1;
    }, 0);
    this.props.changeRowToGuess();
  }

  checkGameIsWon() {
    const isEqual = color => color === 'green';
    if (this.state.tabAuditors.every(isEqual)) {
      this.props.setGameIsWon();
    }
  }

  render() {
    const { tabColors, isRowToGuess, tabAuditors } = this.state;

    const checkButton =
      isRowToGuess && !this.props.isWon ? (
        <StyleRow.CheckButton onClick={this.checkColorsCombination.bind(this)}>
          <i className="fas fa-check" />
        </StyleRow.CheckButton>
      ) : null;

    return (
      <StyleRow.Row>
        <div>{checkButton}</div>
        <StyleRow.RowBoxes>
          <Box
            changeBoxColor={this.changeBoxColor.bind(this)}
            indexBox={0}
            color={tabColors[0]}
          />
          <Box
            changeBoxColor={this.changeBoxColor.bind(this)}
            indexBox={1}
            color={tabColors[1]}
          />
          <Box
            changeBoxColor={this.changeBoxColor.bind(this)}
            indexBox={2}
            color={tabColors[2]}
          />
          <Box
            changeBoxColor={this.changeBoxColor.bind(this)}
            indexBox={3}
            color={tabColors[3]}
          />
          <Box
            changeBoxColor={this.changeBoxColor.bind(this)}
            indexBox={4}
            color={tabColors[4]}
          />
        </StyleRow.RowBoxes>
        <StyleRow.RowAuditors>
          <Auditor color={tabAuditors[0]} />
          <Auditor color={tabAuditors[1]} />
          <Auditor color={tabAuditors[2]} />
          <Auditor color={tabAuditors[3]} />
          <Auditor color={tabAuditors[4]} />
        </StyleRow.RowAuditors>
      </StyleRow.Row>
    );
  }
}

MastermindRow.propTypes = {
  indexRow: PropTypes.number,
  indexRowToGuess: PropTypes.number,
  changeRowToGuess: PropTypes.func,
  tabAuditors: PropTypes.array,
  colorsToGuess: PropTypes.array,
  setGameIsWon: PropTypes.func,
  isWon: PropTypes.bool,
};
