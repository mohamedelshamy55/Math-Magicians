import React from 'react';
import PropTypes from 'prop-types';

const Nums = ({ clickHandler, buttonName }) => (
  <>
    <li data-testid="num-li" btnname={buttonName}><button type="button" onClick={clickHandler}>{buttonName}</button></li>
  </>
);

export default Nums;

Nums.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
