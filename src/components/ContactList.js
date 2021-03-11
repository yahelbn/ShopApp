import React from "react";
import {
  Linking,
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
  Entypo,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

const { width, height } = Dimensions.get("window");

class ContactList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
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

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <FlatList
        data={this.props.data}
        //ItemSeparatorComponent={this.FlatListItemSeparator}
        renderItem={({ item }) => {
          return (
            <View style={[styles.separator]}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <AwesomeButtonRick
                  raiseLevel={6}
                  type="anchor"
                  size="small"
                  width={width / 6}
                  onPress={() => this.openWhatsAppWithManager(item.telephone)}
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
                  onPress={() => this.openCellphoneCall(item.telephone)}
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
export default ContactList;
