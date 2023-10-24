import React from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { AppText } from "../../../components/texts";
import { appColors } from "../../../utils";
import CloseModal from "./CloseModal";

interface IRootModal {
  onPress: () => void;
  isShowTitle?: boolean;
  scroll?: object;
  children?: React.ReactNode;
  title?: string | undefined;
}

const RootModal = (props: IRootModal) => {
  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <View style={styles.root}>
        <View style={styles.innerStyle}>
          <ScrollView
            contentContainerStyle={{ ...styles.scroll, ...props.scroll }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.headerStyle}>
              <View style={{ alignItems: "flex-end" }}>
                <CloseModal onPress={props.onPress} />
              </View>

              {props.isShowTitle && (
                <AppText label={props.title} lblStyle={styles.titleStyle} />
              )}
            </View>
            {props.children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default RootModal;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  innerStyle: {
    width: "100%",
    height: "80%",
    overflow: "hidden",
    paddingHorizontal: 21,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: appColors.white,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: 15,
  },
  headerStyle: {
    marginTop: 13.5,
  },
  titleStyle: { color: appColors.darkPlus, fontSize: 14, fontWeight: "bold" },
});
