"use client";

import { Provider } from "react-redux";
import store from "./../../redux";
import { FC, PropsWithChildren } from "react";

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}> {children}</Provider>;
};

export default ReduxProvider;