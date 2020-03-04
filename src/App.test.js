import React from "react";
import { Provider } from "react-redux";
import { render } from "enzyme";
import App from "./App";
import configureStore from "./store/configureStore";

let store = configureStore();
beforeEach(() => {});
test("renders learn react link", () => {
  const wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(wrapper.html()).toMatchSnapshot();
});
