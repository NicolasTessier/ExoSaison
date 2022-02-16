import React from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal from "./Modal";

describe(Modal.name, () => {
  it("render the modal with content", () => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
    render(
      <Modal>
        <p>test</p>
      </Modal>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
