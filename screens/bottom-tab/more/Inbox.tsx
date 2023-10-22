import React from "react";
import { View } from "react-native";
import { PageHeaderWithReturn, RootScreen } from "../../../components";
import { inbox_data } from "../../../constant";
import { InboxItem } from "./components";

const Inbox = () => {
  return (
    <RootScreen scrollStyle={{ paddingTop: 0 }}>
      <PageHeaderWithReturn label="Inbox" rootStyle={{ marginTop: 20 }} />

      <View style={{ marginTop: 32 }}>
        {inbox_data.map((el, index) => {
          return <InboxItem el={el} key={index} />;
        })}
      </View>
    </RootScreen>
  );
};

export default Inbox;
