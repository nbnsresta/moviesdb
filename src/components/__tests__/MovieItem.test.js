import React from "react";
import { mount } from "enzyme";
import MovieItem from "../MovieItem";
import movie from "../../__mockData__/movie.json";

describe("Render | MovieItem", () => {
  it("Component renders properly", () => {
    const wrapper = mount(<MovieItem movie={movie} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
