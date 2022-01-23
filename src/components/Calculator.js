import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Nums from './Nums';
import Operator from './Operator';
import { keyboard, operators } from './Keyboard';

const calculator = () => {
  const [calcObj, setCalcObject] = useState({});

  const clickHandler = (e) => {
    const buttonName = e.target.innerText;
    setCalcObject(calculate(calcObj, buttonName));
  };

  const screen = `${((calcObj.total || '') + (calcObj.operation || '') + (calcObj.next || '')) || '0'}`;
  return (
    <div data-testid="calc" className="calc-wrapper">
      <div className="calc-title">
        <h3>Let&apos;s do some math!</h3>
      </div>
      <div className="calcbody">
        <div className="display"><p className="result" data-testid="display">{screen}</p></div>
        <div className="keypad">
          <ul className="numbers">
            {keyboard.map((item) => {
              const { id, buttonName } = item;
              return (
                <Nums
                  key={id}
                  buttonName={buttonName}
                  btnname={buttonName}
                  clickHandler={clickHandler}
                />
              );
            })}
          </ul>
          <ul className="aritmetic">
            {operators.map((item) => {
              const { id, buttonName } = item;
              return (
                <Operator
                  key={id}
                  buttonName={buttonName}
                  clickHandler={clickHandler}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default calculator;
