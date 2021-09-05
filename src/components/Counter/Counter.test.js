import React from "react";
import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";
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
  const inputElement = getByTestId("input");

  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: { value: "5" },
  });

  expect(inputElement.value).toBe("5");
});

test("clicking on + button adds 1 to the counter", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("addButton");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("1");
});

test("clicking on - button subtracts 1 from the counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtractButton");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");

  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-1");
});

test("changing input value and then clicking add button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addButton = getByTestId("addButton");
  const inputElement = getByTestId("input");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: 5,
    },
  });
  fireEvent.click(addButton);

  expect(counterElement.textContent).toBe("5");
});

test("changing input value and then clicking subtract button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subtractButton = getByTestId("subtractButton");
  const inputElement = getByTestId("input");
  const counterElement = getByTestId("counter");

  expect(counterElement.textContent).toBe("0");
  expect(inputElement.value).toBe("1");

  fireEvent.change(inputElement, {
    target: {
      value: 5,
    },
  });
  fireEvent.click(subtractButton);

  expect(counterElement.textContent).toBe("-5");
});

test("counter contains correct class name", () => {
  const { getByTestId } = render(<Counter />);
  const counterElement = getByTestId("counter");
  const inputElement = getByTestId("input");
  const addButton = getByTestId("addButton");
  const subtractButton = getByTestId("subtractButton");

  expect(counterElement.className).toBe("");

  fireEvent.change(inputElement, {
    target: {
      value: 5,
    },
  });

  fireEvent.click(addButton);

  expect(counterElement.className).toBe("positive");

  fireEvent.change(inputElement, {
    target: {
      value: 50,
    },
  });

  fireEvent.click(subtractButton);

  expect(counterElement.className).toBe("negative");
});
