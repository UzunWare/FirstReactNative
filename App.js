import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ListScreen2 from "./src/screens/ListScreen2";
import ImageScreen from "./src/screens/ImageScreen";
import ImageScreen2 from "./src/screens/ImageScreen2";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    List2: ListScreen2,
    Image: ImageScreen,
    Image2: ImageScreen2
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
