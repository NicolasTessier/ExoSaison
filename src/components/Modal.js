import { createPortal } from "react-dom";

const node = document.getElementById("modal");

export const Modal = (props) => {
  return createPortal(props.children, node);
};
