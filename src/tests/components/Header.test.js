import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json'; //dont need anymore now that we added snapshot serializer
import Header from '../../components/Header';

test('should render header correctly', ()=>{
    //using enzyme
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe("Welcome To Expensify");
    expect(wrapper).toMatchSnapshot();
    //React Shallow Renderer way ... not as good
    //const renderer = new ReactShallowRenderer();
    //renderer.render(<Header />);
    //expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
});

