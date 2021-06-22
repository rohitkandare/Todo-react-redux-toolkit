import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import Home from "../Home";
import store from "../../store";
import { todo, formError } from './testData.json'
import toJson from 'enzyme-to-json';

describe('Table list component', () => {
  const props = {
    ...todo,
  }
  it('should check snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Home {...props} />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
