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
  const CustomTab = ({
    iconName,
    focused,
  }: {
    iconName: string;
    focused: boolean;
  }) => {
    return (
      <WrapIcon
        width={15}
        height={15}
        iconName={iconName}
        tintColor={focused ? appColors.orange : appColors.darkGrey}
      />
    );
  };

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
          tabBarIcon: ({ focused }) => (
            <CustomTab iconName="menu" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTab iconName="bag" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTab iconName="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTab iconName="user" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTab iconName="more" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
