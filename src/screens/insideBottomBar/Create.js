import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import fakeStore from "../../api/fakeStore";
import RNPickerSelect from "react-native-picker-select";
import ItemList from "../../components/ItemList";
import ButtonTabs from "../../components/ButtonTabs";
import GridComponent from "../../components/GridComponent";

const { width } = Dimensions.get("window");

import { Transition, Transitioning } from "react-native-reanimated";
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 1,
      searchWord: "",
      valuePicker: "",
      List: "",
      productsArray: [],
    };
  }
  componentDidMount() {
    this.searchApi();
  }

  searchApi = async () => {
    const response = await fakeStore.get(this.state.valuePicker);
    this.setState({ productsArray: response.data });
  };

  componentDidUpdate(prevState) {
    if (prevState.productsArray !== []) {
      if (prevState !== this.state) {
        if (this.state.searchWord === "") {
          this.searchApi();
        }
      }
    }
  }

  //Handle the word
  handleSearchWord = (Word) => {
    this.setState({ searchWord: Word });
    var tempArray = [];
    if (this.state.searchWord !== "") {
      this.state.productsArray.forEach((product) => {
        if (JSON.stringify(product.title).includes(this.state.searchWord)) {
          tempArray.push(product);
        }
      });
      this.setState({ productsArray: tempArray });
    }
  };
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

  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  updateSelectOption = (currentSelect) => {
    this.setState({ selectedTab: currentSelect });
    console.log("From Create current select: " + currentSelect);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "column",
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "#F0EEEE",
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null,
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search your product for bid..."
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
                onChangeText={this.handleSearchWord}
                backgroundColor="#F0EEE"
              />
            </View>
            <View style={styles.styleRNP}>
              <RNPickerSelect
                onValueChange={(value) => this.setState({ valuePicker: value })}
                placeholder={{ label: "Chose Category" }}
                items={[
                  { label: "Electronics", value: "/category/electronics" },
                  { label: "Jewelery", value: "/category/jewelery" },
                  { label: "Men clothing", value: "/category/men clothing" },
                  {
                    label: "Women clothing",
                    value: "/category/women clothing",
                  },
                ]}
              />
            </View>
          </View>
          <ButtonTabs updateSelect={this.updateSelectOption} />
          <View style={styles.MainContainer}>
            {this.state.selectedTab == 1 ? (
              <FlatList
                data={this.state.productsArray}
                //ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({ item }) => {
                  return (
                    <ItemList
                      title={JSON.stringify(item.title)}
                      image={JSON.stringify(item.image)}
                      id={JSON.stringify(item.id)}
                      navigation={this.props.navigation}
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <GridComponent
                data={this.state.productsArray}
                navigation={this.props.navigation}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export default Create;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 5,
    marginTop: Platform.OS === "ios" ? 5 : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  styleRNP: {
    marginBottom: Platform.OS === "ios" ? 0 : 14,
    marginTop: Platform.OS === "ios" ? 12 : 0,
    // paddingTop: Platform.OS === "ios" ? 5 : 0,
    // paddingBottom: Platform.OS === "ios" ? 5 : 0,
    marginRight: Platform.OS === "ios" ? 20 : 20,
    marginLeft: Platform.OS === "ios" ? 40 : 30,
  },
  tabContainer: {
    height: 50,
    flexDirection: "row",
    marginTop: 5,
    borderRadius: 70,
    width: width - 30,
    marginHorizontal: 15,
    backgroundColor: "lightgrey",
    marginBottom: 10,
    overflow: "hidden",
  },
});
