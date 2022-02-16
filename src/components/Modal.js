import React from "react";
import { createPortal } from "react-dom";

const node = document.getElementById("modal");

const Modal = (props) => {
  return createPortal(props.children, node);
};

export default Modal;
