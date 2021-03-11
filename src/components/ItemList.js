import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { SharedElement } from "react-native-shared-element";

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        style={styles.separator}
        onPress={() =>
          navigate("createBidScreen", {
            title: this.props.title.slice(1, this.props.title.length - 1),
            url: this.props.image.slice(1, this.props.image.length - 1),
            id: this.props.id,
          })
        }
      >
        <SharedElement style={{ flex: 1 }} id={this.props.id}>
          <Image
            source={{
              uri: this.props.image.slice(1, this.props.image.length - 1),
            }}
            style={styles.imageView}
          />
        </SharedElement>
        <Text style={styles.textView}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textView: {
    width: "50%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000",
    marginLeft: 10,
    marginBottom: 20,
  },
  imageView: {
    marginTop: 13,
    width: "70%",
    height: 120,
    borderRadius: 7,
    backgroundColor: "grey",
    marginBottom: 13,
  },
  separator: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.2,
  },
});
export default ItemList;
