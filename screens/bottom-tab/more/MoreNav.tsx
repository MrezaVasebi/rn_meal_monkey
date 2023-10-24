import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from "./AboutUs";
import CheckOut from "./CheckOut";
import Inbox from "./Inbox";
import More from "./More";
import MyOrder from "./MyOrder";
import Notifications from "./Notifications";
import PaymentDetails from "./PaymentDetails";

const Stack = createNativeStackNavigator();

function MoreNav() {
  return (
    <Stack.Navigator
      initialRouteName="MoreList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MoreList" component={More} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
    </Stack.Navigator>
  );
}

export default MoreNav;
