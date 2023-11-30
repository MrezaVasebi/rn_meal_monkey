import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { WrapIcon } from "../../components";
import { appColors } from "../../utils";
import { Home } from "./home";
import { MenuNav } from "./menu";
import { MoreNav } from "./more";
import { Offers } from "./offers";
import { Profile } from "./profile";

const Tab = createBottomTabNavigator();

export function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.orange,
        tabBarInactiveTintColor: appColors.darkGrey,
        tabBarStyle: {
          height: 55,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Menu"
        component={MenuNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <WrapIcon
                iconName="menu"
                height={15}
                width={15}
                tintColor={focused ? appColors.orange : appColors.darkGrey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <WrapIcon
                iconName="bag"
                height={15}
                width={15}
                tintColor={focused ? appColors.orange : appColors.darkGrey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <WrapIcon
                iconName="home"
                height={15}
                width={15}
                tintColor={focused ? appColors.orange : appColors.darkGrey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <WrapIcon
                iconName="user"
                height={15}
                width={15}
                tintColor={focused ? appColors.orange : appColors.darkGrey}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <WrapIcon
                iconName="more"
                height={15}
                width={15}
                tintColor={focused ? appColors.orange : appColors.darkGrey}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
