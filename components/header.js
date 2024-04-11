import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
export default function Header() {
  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <Link href="">Home</Link>
        <Link href="signin">Signin</Link>
        <Link href="signup">Signup</Link>
        <Link href="profile">profile</Link>
      </View>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});