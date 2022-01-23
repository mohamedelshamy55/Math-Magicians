import React from 'react';
import { render } from '@testing-library/react/';
import '@testing-library/jest-dom/extend-expect';
import Nums from '../components/Nums';

const renderer = require('react-test-renderer');

it('renders the props of component correctly', () => {
  const clickHandler = () => true;
  const buttonName = '5';
  const { getByTestId } = render(<Nums
    buttonName={buttonName}
    clickHandler={clickHandler}
  />);
  expect(getByTestId('num-li')).toHaveTextContent('5');
});

it('matches snapshot 1 of Num component', () => {
  const clickHandler = () => true;
  const buttonName = '5';
  const tree = renderer.create(<Nums
    buttonName={buttonName}
    clickHandler={clickHandler}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
