import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 3,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.text}>
        {colorName} {hexCode}}
      </Text>
    </View>
  );
};

export default ColorBox;
