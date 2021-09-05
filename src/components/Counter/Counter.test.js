import React from "react";
import Counter from "./Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const { getByTestId } = render(<Counter />);
  const headerElement = getByTestId("header");

  expect(headerElement.textContent).toBe("My Counter");
});

test("counter initially starts with text 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");
});

test("add button renders correctly with +", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("addButton");

  expect(addButton.textContent).toBe("+");
});

test("subtract button renders correctly with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtractButton");

  expect(subtractButton.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
});
