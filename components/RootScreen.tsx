import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { AppPadding, appColors } from "../utils";

interface IRootScree {
  root?: object;
  scrollStyle?: object;
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

      <ScrollView
        contentContainerStyle={{ ...styles.scrollStyle, ...props.scrollStyle }}
        showsVerticalScrollIndicator={false}
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: "hidden",
  },
  scrollStyle: {
    flexGrow: 1,
    overflow: "hidden",
    padding: AppPadding.l,
    backgroundColor: appColors.white,
  },
});
