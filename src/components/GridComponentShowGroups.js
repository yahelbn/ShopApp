import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import GridList from "react-native-grid-list";
import GridItemGroups from "../components/GridItemGroups";

const items = [
  { thumbnail: { uri: "https://lorempixel.com/200/200/animals" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/city" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/nature" } },
  { thumbnail: { uri: "https://lorempixel.com/200/200/cats" } },
];

class GridComponentShowGroups extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          data={this.props.data}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <GridItemGroups
                title={JSON.stringify(item.title)}
                image={item.image}
                id={JSON.stringify(item.id)}
                item={item}
                navi={this.props.navigation}
              />
            );
          }}
          showSeparator={true}
          separatorBorderWidth={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default GridComponentShowGroups;
