import React from "react";
import { View } from "react-native";
import { PageHeaderWithReturn, RootScreen } from "../../../components";
import { notification_item } from "../../../constant";
import { NotifIcationItem } from "./components";

const Notifications = () => {
  return (
    <RootScreen scrollStyle={{ paddingTop: 0 }}>
      <PageHeaderWithReturn
        label="Notifications"
        rootStyle={{ marginTop: 20 }}
      />

      <View style={{ marginTop: 32 }}>
        {notification_item.map((el, index) => {
          return <NotifIcationItem item={el} key={index} />;
        })}
      </View>
    </RootScreen>
  );
};

export default Notifications;
