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
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import fakeStore from ".././api/fakeStore";
import RNPickerSelect from "react-native-picker-select";
import BidDetails from ".././components/BidDetails";
import ButtonTabs from ".././components/ButtonTabs";
import GridComponentShowGroups from ".././components/GridComponentShowGroups";
import ScrollBarItem from "../components/ScrollBarItem";

const { width } = Dimensions.get("window");

const arrayOfGroups = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    minAmountOfPartners: 15,
    currentAmountOfPartnersAccepts: 3,
    numberOfRate: 3,
    manager: "Bar Gurfinkel",
    managerCelephone: "0546828424",
    numberOfSuppliers: 0,
    partners: [
      { name: "Yahel Barnoam", telephone: "0547715240" },
      { name: "Ori Barnoam", telephone: "0542546626" },
      { name: "Bar Gurfinkel", telephone: "0546828424" },
    ],
    suppliers: [
      {
        supplier: {
          name: "Mahsanei Hashmal",
          telephone: "0393827635",
          imageOfSupplier:
            "https://שירות-לקוחות.org.il/wp-content/uploads/2019/09/%D7%9E%D7%97%D7%A1%D7%A0%D7%99-%D7%97%D7%A9%D7%9E%D7%9C-%D7%9C%D7%95%D7%92%D7%95.jpg",
          rateStars: 4,
        },

        offerPrice: "1000",
      },
      {
        supplier: {
          name: "A.L.M Hashmal",
          telephone: "0387465728",
          imageOfSupplier:
            "https://www.alm.co.il/media/logo/stores/1/ALM_logo_bli_reshet.jpg",
          rateStars: 4,
        },

        offerPrice: "2000",
      },
    ],
  },

  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    minAmountOfPartners: 5,
    currentAmountOfPartnersAccepts: 5,
    numberOfRate: 4,
    manager: "Yahel Barnoam",
    managerCelephone: "0547715240",
    numberOfSuppliers: 3,
    partners: [
      { name: "Yahel Barnoam", telephone: "0547715240" },
      { name: "Ori Barnoam", telephone: "0542546626" },
      { name: "Bar Gurfinkel", telephone: "0546828424" },
      { name: "Amir Barnoam", telephone: "0523982954" },
      { name: "Iris BarNoam", telephone: "0546609925" },
    ],
    suppliers: [
      {
        supplier: {
          name: "Mahsanei Hashmal",
          telephone: "0393827635",
          imageOfSupplier:
            "https://שירות-לקוחות.org.il/wp-content/uploads/2019/09/%D7%9E%D7%97%D7%A1%D7%A0%D7%99-%D7%97%D7%A9%D7%9E%D7%9C-%D7%9C%D7%95%D7%92%D7%95.jpg",
          rateStars: 4,
        },

        offerPrice: "1000",
      },
      {
        supplier: {
          name: "A.L.M Hashmal",
          telephone: "0387465728",
          imageOfSupplier:
            "https://www.alm.co.il/media/logo/stores/1/ALM_logo_bli_reshet.jpg",
          rateStars: 4,
        },

        offerPrice: "2000",
      },
      {
        supplier: {
          name: "Bug",
          telephone: "0393827635",
          imageOfSupplier:
            "https://www.khk.co.il/wp-content/uploads/2018/12/bug.png",
          rateStars: 4,
        },

        offerPrice: "3000",
      },
    ],
  },
];

import { Transition, Transitioning } from "react-native-reanimated";
class MyBidGroupsScreen extends Component {
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
    // const response = await fakeStore.get(this.state.valuePicker);
    // this.setState({ productsArray: response.data });
    this.setState({ productsArray: arrayOfGroups });
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
                placeholder="Search a product ..."
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
          <View style={{ flex: 0.08, marginTop: 5, marginLeft: 8 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              <ScrollBarItem
                title={"Ready"}
                image={require("../.././assets/handShake.jpg")}
              />
              <ScrollBarItem
                title={"Awaiting"}
                image={require("../.././assets/clockGrey.jpg")}
              />
              <ScrollBarItem
                title={"Rating"}
                image={require("../.././assets/manyStars.png")}
              />
            </ScrollView>
          </View>
          <View style={styles.MainContainer}>
            {this.state.selectedTab == 1 ? (
              <FlatList
                data={this.state.productsArray}
                //ItemSeparatorComponent={this.FlatListItemSeparator}
                renderItem={({ item }) => {
                  return (
                    <BidDetails
                      title={JSON.stringify(item.title)}
                      image={item.image}
                      id={JSON.stringify(item.id)}
                      item={item}
                      navigation={this.props.navigation}
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            ) : (
              <GridComponentShowGroups
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
export default MyBidGroupsScreen;

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
