import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import ReactTestUtils from "react-dom/test-utils";

import Like from "../like";

let container;

//helpers
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing like component", () => {
  //Que por defecto, el componente muestra en el párrafo el valor "Likes: 0".
  it("Likes equal to 0 by default", () => {
    const text = container.querySelector("p");
    expect(text.innerHTML).toBe("Likes: 0");
  });

  //Que cuando se hace clic en el botón Like, el número de likes se incremente en uno.
  it("Number of likes increments by click on increment button", () => {
    const increment = container.querySelector("#increment");
    const text = container.querySelector("p");
    act(() => {
      ReactTestUtils.Simulate.click(increment);
    });
    expect(text.innerHTML).toBe("Likes: 1");
  });

  //Que cuando se hace clic en el botón Dislike el número de likes se decrementa en uno.
  it("Number of likes decrements by click on decrement button", () => {
    const decrement = container.querySelector("#decrement");
    const text = container.querySelector("p");
    act(() => {
      ReactTestUtils.Simulate.click(decrement);
    });
    expect(text.innerHTML).toBe("Likes: -1");
  });
});
