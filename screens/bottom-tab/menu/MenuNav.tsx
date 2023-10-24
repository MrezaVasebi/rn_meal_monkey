import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DesertDetails from "./DesertDetails";
import Deserts from "./Deserts";
import Menu from "./Menu";

const Stack = createNativeStackNavigator();

function MenuNav() {
  return (
    <Stack.Navigator
      initialRouteName="MenuList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MenuList" component={Menu} />
      <Stack.Screen name="Deserts" component={Deserts} />
      <Stack.Screen name="DesertDetails" component={DesertDetails} />
    </Stack.Navigator>
  );
}

export default MenuNav;
