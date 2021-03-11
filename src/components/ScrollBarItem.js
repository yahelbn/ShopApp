import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
const { width, height } = Dimensions.get("window");

class ScrollBarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    // const { navigate } = this.props.navigation;
    //    console.log(this.props.image);
    return (
      <TouchableOpacity style={styles.buttonImageStyle} onPress={() => alert()}>
        <View style={{ flex: 2 }}>
          <ImageBackground
            source={this.props.image}
            style={{
              flex: 3,
              width: null,
              height: null,
              resizeMode: "cover",
              borderRadius: 7,
            }}
          >
            <View
              style={{
                flex: 1,
                paddingTop: 2,
                alignItems: "center",
              }}
            >
              <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonImageStyle: {
    marginRight: 8,
    height: height / 20,
    width: width / 2.8,
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
export default ScrollBarItem;
