import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ clickHandler, buttonName }) => (
  <>
    <li data-testid="oper-li"><button type="button" onClick={clickHandler}>{buttonName}</button></li>
  </>
);

export default Operator;

Operator.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
