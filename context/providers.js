import React from "react";
import { ModalContextProvider } from "./modal.context";

const Providers = ({ children }) => {
  return <ModalContextProvider>{children}</ModalContextProvider>;
};

export default Providers;
