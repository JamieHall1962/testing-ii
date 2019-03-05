import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./dashboard";

describe("<dashboard />", () => {
  describe("Display Items", () => {
    it("Displays Strikes", () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/strikes/i)).toBeInTheDocument();
    });
    it("Displays Balls", () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/balls/i)).toBeInTheDocument();
    });

    it("Displays Strikes Button", () => {
      const { getByTestId } = render(<Dashboard />);
      expect(getByTestId("strikeButton")).toBeInTheDocument();
    });
    it("Displays Balls Button", () => {
      const { getByTestId } = render(<Dashboard />);
      expect(getByTestId("ballButton")).toBeInTheDocument();
    });
    it("Displays Foul Button", () => {
      const { getByTestId } = render(<Dashboard />);
      expect(getByTestId("foulButton")).toBeInTheDocument();
    });
    it("Displays Hit Button", () => {
      const { getByTestId } = render(<Dashboard />);
      expect(getByTestId("hitButton")).toBeInTheDocument();
    });
  });
  describe("Add Ball", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const selected = getByTestId("balls");
    const button = getByTestId("ballButton");
    it("Increments ball count up to 3 and then resets with ball 4", () => {
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Balls: 1/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Balls: 2/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Balls: 3/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Balls: 0/i);
    });
  });

  describe("Add Strike", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const selected = getByTestId("strikes");
    const button = getByTestId("strikeButton");
    it("Increments strike count up to 2 and then resets with strike 3", () => {
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 1/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 2/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 0/i);
    });
  });

  describe("Handles Foul Balls", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const selected = getByTestId("strikes");
    const button = getByTestId("foulButton");
    it("Increments strike count if less than 2, does not increment with 2 strikes", () => {
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 1/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 2/i);
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 2/i);
    });
  });

  describe("Resets after a Hit", () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    const selected = getByTestId("strikes");
    const selectedBalls = getByTestId("balls");
    const button = getByTestId("hitButton");
    it("Resets Balls and Strikes to Zero after a hit", () => {
      fireEvent.click(button);
      expect(selected).toHaveTextContent(/Strikes: 0/i);
      expect(selectedBalls).toHaveTextContent(/Balls: 0/i);
    });
  });
});
