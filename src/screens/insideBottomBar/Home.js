import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

import GradientButton from "react-native-gradient-buttons";

class Home extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../../../assets/bag_legs.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/logo_size.jpg")}
          />
        </View>

        <View style={styles.viewButtons}>
          {/* <View style={styles.viewSquare}> */}
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              style={styles.buttonImageStyle}
              onPress={() => this.props.navigation.navigate("Create")}
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../../../assets/handShake.jpg")}
                  style={{
                    flex: 3,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                    borderRadius: 7,
                  }}
                ></Image>
                <View style={{ flex: 1, paddingTop: 2, alignItems: "center" }}>
                  <Text style={styles.textStyle}>Create Bid</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonImageStyleWithTop}
              onPress={() =>
                this.props.navigation.navigate("MyBidGroupsScreen")
              }
            >
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../../../assets/group.jpg")}
                  style={{
                    flex: 3,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                    borderRadius: 7,
                  }}
                ></Image>
                <View style={{ flex: 1, paddingTop: 2, alignItems: "center" }}>
                  <Text style={styles.textStyle}>My Bid Groups</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "column", marginLeft: 30 }}>
            <TouchableOpacity style={styles.buttonImageStyle}>
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../../../assets/bags_shopping.jpg")}
                  style={{
                    flex: 3,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                    borderRadius: 7,
                  }}
                ></Image>
                <View style={{ flex: 1, paddingTop: 2, alignItems: "center" }}>
                  <Text style={styles.textStyle}>Show all Bids</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.buttonImageStyleWithTop}>
              <View style={{ flex: 2 }}>
                <Image
                  source={require("../../../assets/bags_shopping.jpg")}
                  style={{
                    flex: 3,
                    width: null,
                    height: null,
                    resizeMode: "cover",
                    borderRadius: 7,
                  }}
                ></Image>
                <View style={{ flex: 1, paddingTop: 2, alignItems: "center" }}>
                  <Text style={styles.textStyle}>Create Bid</Text>
                </View>
              </View>
            </TouchableOpacity> */}
          </View>
          {/* <GradientButton
              style={{ marginVertical: 8 }}
              text="Create Bid"
              textStyle={{ fontSize: 20 }}
              gradientEnd="#a9a9a9"
              gradientBegin="#dcdcdc"
              gradientDirection="diagonal"
              height={60}
              width={300}
              radius={15}
              impact
              impactStyle="Light"
              onPressAction={() => this.props.navigation.navigate("Create")}
            />

            <GradientButton
              style={{ marginVertical: 8 }}
              text="My Bid Groups"
              textStyle={{ fontSize: 20 }}
              gradientEnd="#a9a9a9"
              gradientBegin="#dcdcdc"
              gradientDirection="diagonal"
              height={60}
              width={300}
              radius={15}
              impact
              impactStyle="Light"
              onPressAction={() => alert("You pressed me!")}
            />

            <GradientButton
              style={{ marginVertical: 8 }}
              text="Show all Bids"
              textStyle={{ fontSize: 20 }}
              gradientEnd="#a9a9a9"
              gradientBegin="#dcdcdc"
              gradientDirection="diagonal"
              height={60}
              width={300}
              radius={15}
              impact
              impactStyle="Light"
              onPressAction={() => alert("You pressed me!")}
            /> */}
          {/* </View> */}
        </View>
      </ImageBackground>
    );
  }
}

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
    borderRadius: 6,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
  viewButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  viewSquare: {
    marginTop: 120,
    paddingBottom: 30,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 30,
    //backgroundColor: "lightgrey",
    borderRadius: 10,
    shadowOpacity: 1,
  },
  buttonImageStyleWithTop: {
    marginTop: 45,

    height: 100,
    width: 140,
    borderWidth: 0.2,
    borderColor: "grey",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 2,
  },
  buttonImageStyle: {
    height: 100,
    width: 140,
    borderWidth: 0.2,
    borderColor: "grey",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 2,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Home;
