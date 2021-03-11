import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

//Screens
import Home from "../screens/insideBottomBar/Home";
import Create from "../screens/insideBottomBar/Create";
import Profile from "../screens/insideBottomBar/Profile";
import Settings from "../screens/insideBottomBar/Settings";

//Icons
import Icon from "react-native-vector-icons/Ionicons";

class MenuScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../../assets/bags_shopping.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo_size.jpg")}
          />
          <Text style={{ color: "white" }}>דיטרון דנטל | DITRON DENTAL</Text>
        </View>
      </ImageBackground>
    );
  }
}
//md-person-home
export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" color={tintColor} size={24} />
        ),
      },
    },
    Create: {
      screen: Create,
      navigationOptions: {
        tabBarLabel: "Create Bid",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-people" color={tintColor} size={24} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-settings" color={tintColor} size={24} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-people" color={tintColor} size={24} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#b0e0e6",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  }
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
});
