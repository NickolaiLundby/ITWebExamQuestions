import React from 'react';
import { render } from '@testing-library/react';
import ChatMessage from './ChatMessage';
import { shallow } from 'enzyme';

describe('ChatMessage', () => {
    test('Renders', () => {
        const mockChatMessage = {
            name: 'Bob',
            message: 'Hello'
        };
        const {getByText} = render(<ChatMessage name={mockChatMessage.name} message={mockChatMessage.message} />);
        expect(getByText('Hello')).toBeInTheDocument();
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text).toBe(mockChatMessage.name + " " + mockChatMessage.message);
        //expect(wrapper.find('em').length).toBe(1);
        expect(wrapper.find('em').text).toBe(mockChatMessage.message);
    })
})