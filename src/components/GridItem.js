import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class GridItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { navigate } = this.props.navi;

    return (
      <TouchableOpacity
        //style={styles.separator}
        onPress={
          () =>
            navigate("createBidScreen", {
              title: this.props.title.slice(1, this.props.title.length - 1),
              url: this.props.image.slice(1, this.props.image.length - 1),
            })
          //alert(JSON.stringify(this.props))
        }
      >
        <Image
          source={{
            uri: this.props.image.slice(1, this.props.image.length - 1),
          }}
          style={styles.imageView}
        />
        {/* <Text style={styles.textView}>{this.props.title}</Text> */}
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
  },
  imageView: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  separator: {
    flex: 1,
    borderWidth: 0.3,
    width: "100%",
    flexDirection: "row",
  },
});
export default GridItem;
