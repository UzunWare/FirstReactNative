import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ListScreen2 from "./src/screens/ListScreen2";
import ImageScreen from "./src/screens/ImageScreen";
import ImageScreen2 from "./src/screens/ImageScreen2";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import SquareScreenReducers from "./src/screens/SquareScreenReducers";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import TextScreen from "./src/screens/TextScreen";
import PasswordValidation from "./src/screens/PasswordValidation";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    List2: ListScreen2,
    Image: ImageScreen,
    Image2: ImageScreen2,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareReducers: SquareScreenReducers,
    CounterReducer: CounterScreenReducer,
    TextScreen: TextScreen,
    PasswordValidation: PasswordValidation
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
