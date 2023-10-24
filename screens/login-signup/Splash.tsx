import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { WrapIcon } from "../../components";
import RootScreen from "../../components/RootScreen";

const Splash = () => {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    setTimeout(() => {
      nav.navigate("LoginOrSignup");
    }, 3000);
  }, []);

  return (
    <RootScreen root={{ padding: 0 }}>
      <WrapIcon iconName="splash" height={"100%"} width={"100%"} />
    </RootScreen>
  );
};

export default Splash;
