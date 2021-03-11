import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Button,
  Animated,
} from "react-native";
import { SharedElement } from "react-native-shared-element";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import FloattingButton from "../components/FloattingButton";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import StarRating from "react-native-star-rating";

import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");

class createBidScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosePrice: 0,
      choseAmountPeople: 0,
      isModalVisible: false,
      starCountSuppliers: 3,
      starCountGroupParners: 3,
    };
  }

  onStarRatingPressSuppliers(rating) {
    this.setState({
      starCountSuppliers: rating,
    });
  }

  onStarRatingPressGroupParnters(rating) {
    this.setState({
      starCountGroupParners: rating,
    });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { navigation } = this.props;

    // const deviceWidth = Dimensions.get("window").width;
    // const deviceHeight =
    //   Platform.OS === "ios"
    //     ? Dimensions.get("window").height
    //     : require("react-native-extra-dimensions-android").get(
    //         "REAL_WINDOW_HEIGHT"
    //       );

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.MainView}>
          <View style={{ flex: 0.7, alignItems: "center" }}>
            <Text style={styles.textView}>
              {JSON.stringify(navigation.getParam("title", "default value"))}
            </Text>
            {/* <SharedElement id={navigation.getParam("id", 0)}> */}
            <View
              style={{
                flex: 1,
                flexDirection: "row",
              }}
            >
              <FloattingButton />
              <Image
                source={{
                  uri: navigation.getParam("url", "default value"),
                }}
                style={styles.imageView}
              ></Image>
              <View style={{ flex: 0.7 }}></View>
            </View>
            {/* </SharedElement> */}
          </View>

          <View
            style={{
              flex: 0.7,
              height: null,
              width: width,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <View
              style={{
                flex: 0.5,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text style={styles.textSlideStyle}>
                Amount of people:{this.state.choseAmountPeople}{" "}
              </Text>
              <Slider
                style={{ width: 200, height: 60 }}
                minimumValue={0}
                maximumValue={50}
                thumbImage={require("../../assets/shapetoslide_logo.png")}
                minimumTrackTintColor="#b0e0e6"
                maximumTrackTintColor="#b0e0e6"
                onValueChange={(value) =>
                  this.setState({ choseAmountPeople: Math.round(value) })
                }
              />
            </View>
            <View
              style={{
                flex: 0.6,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <AwesomeButtonRick
                raiseLevel={6}
                type="secondary"
                width={width / 2.3}
                onPress={this.toggleModal}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <FontAwesome
                    name="sliders"
                    size={24}
                    color="black"
                    style={{ marginRight: 7, paddingLeft: 3 }}
                  />
                  <Text style={{ paddingRight: 2 }}>
                    Fillter Group Partners
                  </Text>
                </View>
              </AwesomeButtonRick>

              <Modal
                // backdropTransitionInTiming={200}
                backdropOpacity={0.95}
                animationInTiming={1600}
                animationOutTiming={1500}
                backdropColor={"lightgrey"}
                isVisible={this.state.isModalVisible}
                //deviceWidth={deviceWidth}
                //deviceHeight={deviceHeight}
                swipeDirection="down"
                onSwipeComplete={() => this.setState({ isModalVisible: false })}
                onBackButtonPress={() =>
                  this.setState({ isModalVisible: false })
                }
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flex: 0.3 }}>
                    <Text style={[styles.textSlideStyle, { marginBottom: 25 }]}>
                      Choose the rate of your group partner's:{" "}
                      {this.state.starCountGroupParners}
                    </Text>

                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCountGroupParners}
                      selectedStar={(rating) =>
                        this.onStarRatingPressGroupParnters(rating)
                      }
                      emptyStar={require("../../assets/emptystarblue.png")}
                      fullStar={require("../../assets/starfull.png")}
                    />
                  </View>
                  <View style={{ flex: 0.3 }}>
                    <Text style={[styles.textSlideStyle, { marginBottom: 25 }]}>
                      Choose the rate of your group supplier's:{" "}
                      {this.state.starCountSuppliers}
                    </Text>

                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={this.state.starCountSuppliers}
                      selectedStar={(rating) =>
                        this.onStarRatingPressSuppliers(rating)
                      }
                      emptyStar={require("../../assets/emptystarblue.png")}
                      fullStar={require("../../assets/starfull.png")}
                    />
                  </View>
                  <AwesomeButtonRick
                    width={width / 2.3}
                    raiseLevel={6}
                    //textSize={30}
                    type="secondary"
                    onPress={this.toggleModal}
                  >
                    <MaterialCommunityIcons
                      name="checkbox-multiple-marked-outline"
                      size={24}
                      color="black"
                      style={{ marginRight: 15 }}
                    />
                    <Text style={styles.textFillterFinish}>
                      Finish fillter's
                    </Text>
                  </AwesomeButtonRick>
                </View>
              </Modal>
            </View>
            <View
              style={{
                flex: 0.65,
              }}
            >
              <AwesomeButtonRick
                width={width / 2}
                raiseLevel={6}
                textSize={17}
                borderRadius={15}
                type="primary"
              >
                Create a Group
              </AwesomeButtonRick>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageView: {
    width: width / 5,
    // height: 150,
    borderRadius: 7,
    backgroundColor: "grey",
    flex: 1.6,
    marginBottom: 12,
  },
  textView: {
    flex: 0.5,
    paddingLeft: 20,
    paddingTop: Platform.OS === "ios" ? 30 : 30,
    marginBottom: 10,
    paddingRight: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  MainView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#b0e0e6",
  },
  textSlideStyle: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  textFillterFinish: {
    fontWeight: "bold",
    fontSize: 17,
  },
  buttonImageStyle: {
    flexDirection: "row",
    height: 50,
    width: width / 2.4,
    borderRadius: 7,
  },
  container: {
    flex: 1,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

// createBidScreen.sharedElements = (navigation) => {
//   const id = navigation.getParam("id");
//   return [id];
// };

export default createBidScreen;
