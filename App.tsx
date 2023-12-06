import { useFonts } from "expo-font";
import { FinalNav } from "./screens/final_nav";

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <FinalNav />;
}
