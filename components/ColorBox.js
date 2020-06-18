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

  const textColor = {
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "gray"
        : "white",
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.text, textColor]}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;
