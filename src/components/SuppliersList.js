import React from "react";
import {
  Linking,
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import Modal from "react-native-modal";

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";
import AwesomeButtonCartMan from "react-native-really-awesome-button/src/themes/cartman";

const { width, height } = Dimensions.get("window");

class SuppliersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false,
      supplierName: "",
    };
  }

  componentDidMount() {}

  openWhatsAppWithManager = (tele) => {
    console.log("tele1" + tele.slice(1));
    Linking.openURL("whatsapp://send?text&phone=+972" + tele.slice(1));
  };

  openCellphoneCall = (tele) => {
    // console.log("tele1" + tele.slice(1));
    Linking.openURL(`tel:${tele}`);
  };

  toggleModal = (item) => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      supplierName: item.supplier.name,
    });
    console.log("choose item " + item.supplier.name);
  };

  render() {
    // const { navigate } = this.props.navigation;

    return (
      //   <View>{console.log(this.props.data)}</View>
      <FlatList
        data={this.props.data}
        //ItemSeparatorComponent={this.FlatListItemSeparator}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => this.toggleModal(item)}
              style={[styles.separator]}
            >
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{
                    flex: 2,
                    resizeMode: "cover",
                    height: null,
                    width: width / 1.22,
                    borderRadius: 10,
                  }}
                  source={{ uri: item.supplier.imageOfSupplier }}
                />
                {/* <Text style={{ fontWeight: "bold" }}>{item}</Text> */}
                {console.log(item.supplier.imageOfSupplier)}
                <View
                  style={{
                    flex: 0.9,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>
                    Offer price:{item.offerPrice} {"\u20AA"}
                  </Text>
                  <View style={{ flex: 0.7 }}></View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <StarRating
                      disabled={true}
                      starSize={25}
                      maxStars={5}
                      rating={item.supplier.rateStars}
                      emptyStar={require("../../assets/emptystarblue.png")}
                      fullStar={require("../../assets/starfull.png")}
                      starStyle={{
                        padding: 0,
                        marginTop: 10,
                        marginBottom: 10,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                      }}
                    >
                      <AwesomeButtonRick
                        raiseLevel={6}
                        type="anchor"
                        size="small"
                        width={width / 6}
                        onPress={() =>
                          this.openWhatsAppWithManager(item.supplier.telephone)
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
                          this.openCellphoneCall(item.supplier.telephone)
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
                  </View>
                </View>
                <Modal
                  // backdropTransitionInTiming={200}
                  backdropOpacity={0.67}
                  animationInTiming={1600}
                  animationOutTiming={1500}
                  backdropColor={"lightgrey"}
                  isVisible={this.state.isModalVisible}
                  //deviceWidth={deviceWidth}
                  //deviceHeight={deviceHeight}
                  swipeDirection="right"
                  propagateSwipe={true}
                  onSwipeComplete={() =>
                    this.setState({ isModalVisible: false })
                  }
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
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                      Are you sure , Do you want to close the deal with:{" "}
                      {this.state.supplierName}?
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        flex: 0.3,
                        alignItems: "center",
                      }}
                    >
                      <AwesomeButtonCartMan
                        raiseLevel={6}
                        type="primary"
                        height={height / 15}
                        width={width / 5}
                        style={{ marginRight: 20 }}
                      >
                        <Text style={{ fontWeight: "bold" }}>Yes</Text>
                      </AwesomeButtonCartMan>
                      <AwesomeButtonCartMan
                        raiseLevel={6}
                        type="secondary"
                        height={height / 15}
                        width={width / 5}
                        onPress={() => this.setState({ isModalVisible: false })}
                      >
                        <Text style={{ fontWeight: "bold" }}>No</Text>
                      </AwesomeButtonCartMan>
                    </View>
                  </View>
                </Modal>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: height / 2.9,
    width: width / 1.2,
    // flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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
export default SuppliersList;
