//ShowBidInfoScreen

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  Linking,
  TouchableOpacity,
  Button,
  Animated,
  FlatList,
} from "react-native";
import Slider from "@react-native-community/slider";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
  AntDesign,
  Feather,
  Foundation,
} from "@expo/vector-icons";
import FloattingButton from "../components/FloattingButton";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import StarRating from "react-native-star-rating";
import ContactList from "../components/ContactList";
import SuppliersList from "../components/SuppliersList";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");

class ShowBidInfoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choseAmountPeople: 0,
      isModalVisible: false,
      isModalVisible2: false,
      starCountSuppliers: 3,
      starCountGroupParners: 3,
      item: null,
      status: "Awaiting",
      numberOfRates: 3,
      managerName: "",
      managerCelephone: "",
      minAmountOfPartners: 0,
      currentAmountOfPartnersAccepts: 0,
      partners: [],
      numberOfSuppliers: 0,
      logoLable: null,
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    let statusFromNavi = navigation.getParam("status", "default value");
    this.setState({ status: statusFromNavi });

    const itemFromNavi = navigation.getParam("item", "default value");
    this.setState({ item: itemFromNavi });

    let ratesFromNavi = navigation.getParam("numberOfRate", 3);
    this.setState({
      numberOfRates: ratesFromNavi,
      managerName: itemFromNavi.manager,
      managerCelephone: itemFromNavi.managerCelephone,
      minAmountOfPartners: itemFromNavi.minAmountOfPartners,
      currentAmountOfPartnersAccepts:
        itemFromNavi.currentAmountOfPartnersAccepts,
      partners: itemFromNavi.partners,
      numberOfSuppliers: itemFromNavi.numberOfSuppliers,
      suppliers: itemFromNavi.suppliers,
    });

    if (statusFromNavi == "Awaiting") {
      this.setState({
        logoLable: (
          <AntDesign
            name="clockcircleo"
            size={17}
            color="black"
            style={{ marginRight: 8 }}
          />
        ),
      });
    } else {
      this.setState({
        logoLable: (
          <AntDesign
            name="checkcircleo"
            size={17}
            color="black"
            style={{ marginRight: 8 }}
          />
        ),
      });
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

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

  toggleModal2 = () => {
    this.setState({ isModalVisible2: !this.state.isModalVisible2 });
  };

  openWhatsAppWithManager = (tele) => {
    console.log("tele1" + tele.slice(1));
    Linking.openURL("whatsapp://send?text&phone=+972" + tele.slice(1));
  };

  openCellphoneCall = (tele) => {
    // console.log("tele1" + tele.slice(1));
    Linking.openURL(`tel:${tele}`);
  };

  render() {
    const { navigation } = this.props;

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
                flex: 1.5,
                flexDirection: "row",
              }}
            >
              <FloattingButton />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: navigation.getParam("url", "default value"),
                  }}
                  style={styles.imageView}
                ></Image>
                <View
                  style={[
                    styles.styleViewLabel,
                    {
                      backgroundColor:
                        this.state.status == "Ready" ? "#98fb98" : "#fffacd",
                    },
                  ]}
                >
                  {/* <AntDesign
                    name="clockcircleo"
                    size={17}
                    color="black"
                    style={{ marginRight: 8 }}
                  /> */}
                  {this.state.logoLable}
                  <Text>{this.state.status}</Text>
                </View>
                <StarRating
                  disabled={true}
                  starSize={25}
                  maxStars={5}
                  rating={this.state.numberOfRates}
                  emptyStar={require("../../assets/emptystarblue.png")}
                  fullStar={require("../../assets/starfull.png")}
                  starStyle={{ padding: 0, marginTop: 7, marginBottom: 10 }}
                />
              </View>
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
                flex: 0.23,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontWeight: "bold", marginRight: 7, fontSize: 17 }}
              >
                Manager:
              </Text>
              <Text style={{ fontWeight: "bold", marginRight: 7 }}>
                {this.state.managerName}
              </Text>

              <AwesomeButtonRick
                raiseLevel={6}
                type="anchor"
                size="small"
                width={width / 6}
                onPress={() =>
                  this.openWhatsAppWithManager(this.state.managerCelephone)
                }
              >
                <Fontisto
                  name="whatsapp"
                  size={24}
                  color="white"
                  style={{ marginRight: 7, paddingLeft: 3 }}
                />
              </AwesomeButtonRick>

              <AwesomeButtonRick
                style={{ marginLeft: 8 }}
                raiseLevel={6}
                type="primary"
                size="small"
                width={width / 6}
                onPress={() =>
                  this.openCellphoneCall(this.state.managerCelephone)
                }
              >
                <Feather
                  name="phone-call"
                  size={24}
                  color="white"
                  style={{ marginRight: 7, paddingLeft: 3 }}
                />
              </AwesomeButtonRick>
            </View>

            <View
              style={{
                flex: 0.3,
                // justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{ fontWeight: "bold", marginRight: 7, marginBottom: 8 }}
              >
                Amount of partner's: {this.state.currentAmountOfPartnersAccepts}{" "}
                / {this.state.minAmountOfPartners}
              </Text>
              <AwesomeButtonRick
                raiseLevel={6}
                type="secondary"
                width={width / 2.3}
                onPress={this.toggleModal}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    name="old-phone"
                    size={24}
                    color="black"
                    style={{ marginRight: 7, paddingLeft: 3 }}
                  />
                  <Text style={{ paddingRight: 2 }}>Contact partners</Text>
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
                swipeDirection="right"
                propagateSwipe={true}
                onSwipeComplete={() => this.setState({ isModalVisible: false })}
                onBackButtonPress={() =>
                  this.setState({ isModalVisible: false })
                }
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 0.13,
                      flexDirection: "row",
                      alignItems: "baseline",
                    }}
                  >
                    <AntDesign name="contacts" size={30} color="grey" />
                    <Text
                      style={{ fontSize: 30, color: "grey", marginLeft: 8 }}
                    >
                      Contact Partners
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ContactList data={this.state.partners} />
                  </View>
                </View>
              </Modal>
            </View>

            <View
              style={{
                flex: 0.36,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
                Interested suppliers:{this.state.numberOfSuppliers}{" "}
              </Text>

              <AwesomeButtonRick
                raiseLevel={6}
                type="secondary"
                width={width / 2.3}
                onPress={this.toggleModal2}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Foundation name="torso-business" size={24} color="black" />
                  <Text style={{ paddingRight: 2, marginLeft: 8 }}>
                    Chose supplier
                  </Text>
                </View>
              </AwesomeButtonRick>
            </View>
            <Modal
              // backdropTransitionInTiming={200}
              backdropOpacity={0.95}
              animationInTiming={1600}
              animationOutTiming={1500}
              backdropColor={"lightgrey"}
              isVisible={this.state.isModalVisible2}
              //deviceWidth={deviceWidth}
              //deviceHeight={deviceHeight}
              swipeDirection="right"
              propagateSwipe={true}
              onSwipeComplete={() => this.setState({ isModalVisible2: false })}
              onBackButtonPress={() =>
                this.setState({ isModalVisible2: false })
              }
            >
              <View
                style={{
                  flex: 1,
                  // justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flex: 0.13,
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <Foundation name="torso-business" size={30} color="grey" />
                  <Text style={{ fontSize: 30, color: "grey", marginLeft: 15 }}>
                    Chose supplier
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <SuppliersList data={this.state.suppliers} />
                </View>
              </View>
            </Modal>
            <View
              style={{
                flex: 0.32,
              }}
            >
              <AwesomeButtonRick
                width={width / 2}
                raiseLevel={6}
                textSize={17}
                borderRadius={15}
                type="primary"
              >
                Close Deal
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
    width: width / 2.5,
    // height: 150,
    borderRadius: 7,
    backgroundColor: "grey",
    flex: 1.6,
    marginBottom: 10,
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
  styleViewLabel: {
    flexDirection: "row",
    marginBottom: 10,
    width: width / 3,
    height: height / 27,
    marginRight: 12,
    marginTop: 0,
    borderRadius: 70,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  separator: {
    flex: 1,
    height: height / 9,
    width: width / 1.2,
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "mintcream",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

// createBidScreen.sharedElements = (navigation) => {
//   const id = navigation.getParam("id");
//   return [id];
// };

export default ShowBidInfoScreen;
