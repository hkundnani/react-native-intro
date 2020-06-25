import React from "react";
import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.heading}>Here are some boxes of different color</Text>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33682" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" /> */}
      {/* <Text style={styles.heading}>{paletteName}</Text> */}

      <FlatList
        data={colors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </View>
  );
};

export default ColorPalette;
