import React from "react";
import { View, StyleSheet } from "react-native";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import MangeAnimLogInPage from "../components/AnimatedLogInPage";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require("../../assets/colorful_gifts.jpg"),
    ]);

    //const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets]);
  }

  render() {
    console.log(this.props);
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <MangeAnimLogInPage {...this.props}></MangeAnimLogInPage>;
  }
}

const styles = StyleSheet.create({});
