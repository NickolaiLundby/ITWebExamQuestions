import React from 'react';
import { render } from '@testing-library/react';
import Chat from './Chat';
import ReactDOM from 'react-dom';

// Smoke test
test('Renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chat/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
  
it('Renders name field', ()=> {
    const {getByText} = render(<Chat />);
    expect(getByText('Name:')).toBeInTheDocument();
});


  