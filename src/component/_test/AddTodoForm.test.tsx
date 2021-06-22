import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import AddTodoForm from "../AddTodoForm";

describe('AddTodoForm component', () => {
  it('should check snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
