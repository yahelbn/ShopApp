import React, { Component } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Tab from "../components/Tab";

//import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

import { Transition, Transitioning } from "react-native-reanimated";
class ButtonTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };

    this.ref = React.createRef();
  }
  componentDidMount = () => {
    this.ref.current.animateNextTransition();
  };

  selectedTab = (tabIndex) => {
    this.ref.current.animateNextTransition();
    this.setState({ selectedTab: tabIndex });
    this.props.updateSelect(this.state.selectedTab);
  };

  transition = (
    <Transition.Together>
      <Transition.In
        type="slide-right"
        durationMs={2000}
        interpolation="easeInOut"
      />
      <Transition.In type="fade" durationMs={500} />
      <Transition.Change />
    </Transition.Together>
  );

  render() {
    return (
      <Transitioning.View ref={this.ref} transition={this.transition}>
        <View style={{ ...styles.tabContainer }}>
          <View
            style={[
              {
                position: "absolute",
                height: 50,
                width: (width - 30) / 2,
                backgroundColor: "#b0e0e6",
                left: this.state.selectedTab == 0 ? 0 : null,
                right: this.state.selectedTab == 1 ? 0 : null,
              },
            ]}
          />

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              this.selectedTab(0);
            }}
          >
            <Tab
              icon="md-photos"
              isSelected={this.state.selectedTab == 0 ? true : false}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              this.selectedTab(1);
            }}
          >
            <Tab
              icon="md-grid"
              isSelected={this.state.selectedTab == 1 ? true : false}
            />
          </TouchableOpacity>
        </View>
      </Transitioning.View>
    );
  }
}
export default ButtonTab;

const styles = StyleSheet.create({
  tabContainer: {
    marginTop: 8,
    height: 38,
    flexDirection: "row",
    marginTop: 5,
    borderRadius: 70,
    width: width - 30,
    marginHorizontal: 15,
    backgroundColor: "lightgrey",
    marginBottom: 2,
    overflow: "hidden",
  },
});
