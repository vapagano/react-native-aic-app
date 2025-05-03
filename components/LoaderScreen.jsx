import React from "react";
import { Screen } from "./Screen";
import { Loader } from "./Loader";

export const LoaderScreen = () => {
  return (
    <Screen className="justify-center items-center">
      <Loader />
    </Screen>
  );
};
