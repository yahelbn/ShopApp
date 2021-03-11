import React from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import StarRating from "react-native-star-rating";
import { SharedElement } from "react-native-shared-element";

const { width, height } = Dimensions.get("window");

class BidDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Awaiting",
      textSuppliers: null,
    };
  }

  componentDidMount() {
    if (
      this.props.item.currentAmountOfPartnersAccepts ==
      this.props.item.minAmountOfPartners
    ) {
      this.setState({ status: "Ready" });
      this.setState({
        textSuppliers: (
          <Text style={styles.textView}>
            interested suppliers's:{this.props.item.numberOfSuppliers}
          </Text>
        ),
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        style={styles.separator}
        onPress={() =>
          navigate("ShowBidInfoScreen", {
            title: this.props.title.slice(1, this.props.title.length - 1),
            url: this.props.image,
            id: this.props.id,
            item: this.props.item,
            status: this.state.status,
            numberOfRate: this.props.item.numberOfRate,
          })
        }
      >
        <View style={{ flex: 0.8 }} id={this.props.id}>
          <Image
            source={{
              uri: this.props.image,
            }}
            style={styles.imageView}
          />
        </View>
        <View
          style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        >
          <Text style={[styles.textView, { fontSize: 15 }]}>
            {this.props.title}
          </Text>
          <Text style={styles.textView}>
            Amount of partner's:{" "}
            {this.props.item.currentAmountOfPartnersAccepts} /{" "}
            {this.props.item.minAmountOfPartners}
          </Text>

          {this.state.textSuppliers}

          <StarRating
            disabled={true}
            starSize={25}
            maxStars={5}
            rating={this.props.item.numberOfRate}
            emptyStar={require("../../assets/emptystarblue.png")}
            fullStar={require("../../assets/starfull.png")}
            starStyle={{ padding: 0, marginTop: 7 }}
          />

          <View
            style={[
              styles.styleViewLabel,
              {
                backgroundColor:
                  this.state.status == "Ready" ? "#98fb98" : "#fffacd",
              },
            ]}
          >
            <Text>{this.state.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textView: {
    width: null,
    textAlignVertical: "center",
    paddingTop: 5,
    color: "#000",
    marginLeft: 2,
    fontWeight: "bold",
  },
  imageView: {
    marginTop: 13,
    width: "70%",
    height: height / 5,
    borderRadius: 7,
    backgroundColor: "grey",
    marginBottom: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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
    height: height / 4,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.2,
  },
  styleViewLabel: {
    marginRight: 12,
    marginTop: 12,
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
});
export default BidDetails;
