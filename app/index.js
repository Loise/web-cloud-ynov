import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    backgroundColor: 'blue',
    minWidth: 100,
    minHeight: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 700
  }
});
