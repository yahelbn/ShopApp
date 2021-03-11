import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import MyBidGroupsScreen from "./src/screens/MyBidGroupsScreen";
import Create from "./src/screens/insideBottomBar/Create";
import createBidScreen from "./src/screens/createBidScreen";
import createBottomTabNavigator from "./src/screens/MenuScreen";
import ShowBidInfoScreen from "./src/screens/ShowBidInfoScreen";
//import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const navigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: { headerShown: false },
    },
    Menu: {
      screen: createBottomTabNavigator,
      navigationOptions: { headerShown: false },
    },
    Create: { screen: Create, navigationOptions: { headerShown: false } },

    createBidScreen: {
      screen: createBidScreen,
      navigationOptions: { headerShown: false },
    },
    MyBidGroupsScreen: {
      screen: MyBidGroupsScreen,
      navigationOptions: { headerShown: false },
    },
    ShowBidInfoScreen: {
      screen: ShowBidInfoScreen,
      navigationOptions: { headerShown: false },
    },
  },

  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      // title: "App",
    },
  }
);

export default createAppContainer(navigator);
