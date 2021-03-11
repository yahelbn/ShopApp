import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  View,
  Animated,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

class FloattingButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
    Animated.spring(this.animation, {
      toValue,
      friction: 5,
    }).start();

    this.open = !this.open;
  };

  render() {
    //const { navigate } = this.props.navi;
    const heartStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -15],
          }),
        },
      ],
    };

    const thumbStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -15],
          }),
        },
      ],
    };

    const pinStlye = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -15],
          }),
        },
      ],
    };

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };
    return (
      <View
        style={{
          flex: 0.8,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableWithoutFeedback>
          <Animated.View
            style={[styles.button, styles.secondary, heartStyle, opacity]}
          >
            <AntDesign name="hearto" size={17} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View
            style={[styles.button, styles.secondary, thumbStyle, opacity]}
          >
            <Entypo name="thumbs-up" size={17} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View
            style={[styles.button, styles.secondary, pinStlye, opacity]}
          >
            <Entypo name="location-pin" size={17} color="#F02A4B" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="plus" size={21} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 4,
    //position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowRadius: 10,
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10,
    },
  },
  menu: {
    backgroundColor: "#F02A4B",
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "#FFF",
  },
});
export default FloattingButton;
