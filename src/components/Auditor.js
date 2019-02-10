import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PawnAuditor = styled.div`
  width: 10px;
  height: 10px;
  border: solid 2px #ea6153;
  transition: 0.2s;
  border-radius: 100px;
  background-color: ${props => props.color};
`;

const Auditor = props => {
  return <PawnAuditor color={props.color} />;
};

export default memo(Auditor);

Auditor.propTypes = {
  color: PropTypes.string,
};
