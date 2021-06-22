import { mount, shallow } from "enzyme";
import React from "react";
import My404Component from "../My404Component";
import toJson from 'enzyme-to-json';

describe('AddTodoForm component', () => {
  it('renders correctly enzyme', () => {
    const wrapper = shallow(<My404Component />)
    expect(wrapper.find('h1').text()).toEqual('404 Not Found ');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
