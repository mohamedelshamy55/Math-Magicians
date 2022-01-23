import React from 'react';
import { fireEvent, render } from '@testing-library/react/';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';
import calculate from '../logic/calculate';

const renderer = require('react-test-renderer');

it('matches snapshot 1 of Calculator component', () => {
  const clickHandler = () => true;
  const buttonName = '5';
  const tree = renderer.create(<Calculator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the props of component correctly', () => {
  const clickHandler = () => true;
  const buttonName = 'AC';
  const { getByTestId } = render(<Calculator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />);
  expect(getByTestId('calc')).toHaveTextContent('AC');
});

it('should perform user interaction', () => {
  const { getByRole } = render(<Calculator />);
  const btn = getByRole('button', { name: /=/i });
  const calcObj = {
    total: '3',
    next: '4',
    operation: '+',
  };
  fireEvent.click(btn, { target: { innerText: '=' } });
  const result = calculate(calcObj, btn.value);
  expect(result.total).toBe('7');
});
