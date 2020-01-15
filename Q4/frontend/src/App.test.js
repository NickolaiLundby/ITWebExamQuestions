import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

// Smoke test
test('Renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Renders title', ()=> {
  const {getByText} = render(<App />);
  expect(getByText('Welcome to React')).toBeInTheDocument();
})
