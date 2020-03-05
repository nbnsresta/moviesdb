import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import SectionRow from "../SectionRow";
import configureStore from "../../store/configureStore";

let store;
beforeEach(() => {
  store = configureStore();
});

describe("Render | SectionRow", () => {
  it("component renders properly", () => {
    const wrapper = render(
      <Provider store={store}>
        <SectionRow category="new" title="New" />
      </Provider>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
