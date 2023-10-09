import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { AppRadius, appColors } from "../utils";

interface IRootScree {
  root?: object;
  children?: React.ReactNode;
}

const RootScreen = (props: IRootScree) => {
  return (
    <SafeAreaView style={{ ...styles.root, ...props.root }}>
      <StatusBar
        hidden={false}
        barStyle={"dark-content"}
        backgroundColor={appColors.white}
      />

      {props.children}
    </SafeAreaView>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: AppRadius.l,
    backgroundColor: appColors.white,
  },
});
