import React from "react";
import { WrapIcon } from "../components";
import RootScreen from "../components/RootScreen";

const Splash = () => {
  return (
    <RootScreen root={{ padding: 0 }}>
      <WrapIcon iconName="splash" height={"100%"} width={"100%"} />
    </RootScreen>
  );
};

export default Splash;
