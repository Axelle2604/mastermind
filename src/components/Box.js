import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pawn = styled.div`
  width: 50px;
  height: 50px;
  border: solid 5px #ea6153;
  transition: 0.2s;
  border-radius: 100px;
  background-color: ${props => props.color};
  &:hover {
    cursor: pointer;
    border: solid 5px #bdc3c7;
  }
`;

const Box = props => {
  function changeColor() {
    props.changeBoxColor(props.indexBox);
  }

  return <Pawn onClick={changeColor} color={props.color} />;
};

export default memo(Box);

Box.propTypes = {
  color: PropTypes.string,
  indexBox: PropTypes.number,
  changeBoxColor: PropTypes.func,
};
