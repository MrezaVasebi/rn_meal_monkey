import React from "react";
import { View } from "react-native";
import { PageHeaderWithReturn, RootScreen } from "../../../components";
import { NotifIcationItem } from "./components";

const Notifications = () => {
  let data = [
    { desc: "Your orders has been picked up", time: "Now" },
    { desc: "Your orders has been picked up", time: "1 h ago" },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      time: "3 h ago",
    },
    { desc: "Your orders has been picked up", time: "5 h ago" },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      time: "4 h ago",
    },
    { desc: "Your orders has been picked up", time: "05 Sep 2020" },
  ];
  return (
    <RootScreen scrollStyle={{ paddingTop: 0 }}>
      <PageHeaderWithReturn
        label="Notifications"
        rootStyle={{ marginTop: 20 }}
      />

      <View style={{ marginTop: 32 }}>
        {data.map((el, index) => {
          return <NotifIcationItem item={el} key={index} />;
        })}
      </View>
    </RootScreen>
  );
};

export default Notifications;
