import React from 'react';
import { render } from '@testing-library/react/';
import '@testing-library/jest-dom/extend-expect';
import Operator from '../components/Operator';

const renderer = require('react-test-renderer');

it('renders the props of component correctly', () => {
  const clickHandler = () => true;
  const buttonName = '+';
  const { getByTestId } = render(<Operator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />);
  expect(getByTestId('oper-li')).toHaveTextContent('+');
});

it('matches snapshot 1 of Operator component', () => {
  const clickHandler = () => true;
  const buttonName = '-';
  const tree = renderer.create(<Operator
    buttonName={buttonName}
    clickHandler={clickHandler}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
