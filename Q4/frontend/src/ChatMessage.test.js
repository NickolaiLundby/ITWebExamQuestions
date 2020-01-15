import React from 'react';
import ChatMessage from './ChatMessage';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'

describe('<ChatMessage/>', () => {
    test('Renders', () => {
        const mockNameMsg = {
            name: 'Bob', 
            message: 'Hello'
        };
        const wrapper = shallow(<ChatMessage name={mockNameMsg.name} message={mockNameMsg.message} />);
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text()).toBe(mockNameMsg.name + " " + mockNameMsg.message);
        expect(wrapper.find('strong').length).toBe(1);
        expect(wrapper.find('strong').text()).toBe(mockNameMsg.name);
        expect(wrapper.find('em').length).toBe(1);
        expect(wrapper.find('em').text()).toBe(mockNameMsg.message);
    });
});

test('snapshot', () => {
    const mockNameMsg = {
        name: 'Alice', 
        message: 'Hello'
    };
    const component = renderer.create(<ChatMessage name={mockNameMsg.name} message={mockNameMsg.message} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})