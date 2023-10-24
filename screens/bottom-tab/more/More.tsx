import React from "react";
import { View } from "react-native";
import { PageHeader, RootScreen } from "../../../components";
import { more_item_types } from "../../../types";
import MoreItem from "./components/MoreItem";

const More = () => {
  let data: more_item_types[] = [
    {
      label: "Payment Details",
      iconName: "income",
      badge: 0,
      routeName: "PaymentDetails",
    },
    { label: "My Orders", iconName: "bag", badge: 0, routeName: "MyOrder" },
    {
      label: "Notification",
      iconName: "notif",
      badge: 15,
      routeName: "Notifications",
    },
    { label: "Inbox", iconName: "mail", badge: 0, routeName: "Inbox" },
    { label: "About Us", iconName: "info", badge: 0, routeName: "AboutUs" },
  ];

  return (
    <RootScreen>
      <PageHeader label="More" />

      <View style={{ marginTop: 31 }}>
        {data.map((el, index) => {
          return <MoreItem el={el} key={index} />;
        })}
      </View>
    </RootScreen>
  );
};

export default More;
