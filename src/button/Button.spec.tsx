import { mount, shallow } from "enzyme";
import * as React from "react";

import Button from "./Button";


const mockOnClick = jest.fn();

describe("<Button />", () => {
  it("mounts properly", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.exists()).toBe(true);
  });

  describe("#render", () => {
    it("is called only once", () => {
      const spy = jest.spyOn(Button.prototype, "render");
      const once = 1;

      const wrapper = mount(<Button />);

      expect(spy).toHaveBeenCalledTimes(once);
      spy.mockClear();
    });
  });

  describe("#onClick", () => {
    it("simulates a click event", () => {
      const spy = jest.spyOn(Button.prototype, "render");
      const wrapper = shallow(<Button onClick={mockOnClick} />);
      const once = 1;
      const twice = 2;

      wrapper.find("button").simulate("click");


      expect(mockOnClick).toBeCalled();
      expect(mockOnClick).toHaveBeenCalledTimes(once);
      expect(spy).toHaveBeenCalledTimes(once);
      spy.mockClear();
    });
  });

  it("contains a button element", () => {
    const wrapper = shallow(<Button />);
    const one = 1;

    expect(wrapper.find("button")).toHaveLength(one);
    expect(wrapper.is("button")).toBe(true);
  });

  it("has a base className of `mdc-button`", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.find("button").hasClass("mdc-button")).toBe(true);
  });

  it("accepts and renders children", () => {
    const wrapper = mount(<Button />);
    const str = "button text";
    const el = <div>{str}</div>;

    expect(wrapper.prop("children")).toBe(undefined);

    wrapper.setProps({ children: str });
    expect(wrapper.text()).toBe(str);

    wrapper.setProps({ children: el });
    expect(wrapper.containsMatchingElement(el)).toBe(true);
  });
});
