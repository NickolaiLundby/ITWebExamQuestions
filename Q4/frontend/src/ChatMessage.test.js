import React from 'react';
import { render } from '@testing-library/react';
import ChatMessage from './ChatMessage';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

describe('<ChatMessage/>', () => {
    test('Renders', () => {
        const mockChatmMssage = {
            name: 'Bob', 
            message: 'Hello'
        };
        const wrapper = shallow(<ChatMessage name={mockChatmMssage.name} message={mockChatmMssage.message} />);
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text()).toBe(mockChatmMssage.name + " " + mockChatmMssage.message);
        expect(wrapper.find('strong').length).toBe(1);
        expect(wrapper.find('strong').text()).toBe(mockChatmMssage.name);
        expect(wrapper.find('em').length).toBe(1);
        expect(wrapper.find('em').text()).toBe(mockChatmMssage.message);
    })
})