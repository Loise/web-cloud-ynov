import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { signup } from "../firebase/auth_signup_password";
import { signin } from "../firebase/auth_signin_password";
import { signInWithFacebook } from "../firebase/auth_facebook_signin_popup"
import { signinWithGithub } from "../firebase/auth_github_signin_popup";
import { loginWithPhoneNumber } from "../firebase/auth_phone_signin";
import { verifyCode } from "../firebase/auth_phone_verify_code";
// import Toast from 'react-native-root-toast';
// import SnackBar from 'react-native-snackbar-component'
export default function Page() {
  // let toast = Toast.show('Request failed to send.', {
  //   duration: Toast.durations.LONG,
  // });
  
  // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
  // setTimeout(function hideToast() {
  //   Toast.hide(toast);
  // }, 500);

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [phoneNumber, onChangePhoneNumber] = React.useState("");
  const [code, onChangeCode] = React.useState("");



  return (
    <View style={styles.container}>
      {/* <Toast visible={true}>Thanks for subscribing!</Toast> */}
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
      ></TextInput>
      <Button title="Sign Up!" onPress={() => signup(email, password)} />
      <Button title="Sign In!" onPress={() => signin(email, password)} />
      <br/>
      ____
      <br/>
      <Button title="Sign In with Facebook" onPress={() => signInWithFacebook()} />
      <Button title="Sign In with Github" onPress={() => signinWithGithub()} />

      <br/>
      ____
      <br/>
      <Text>Phone number</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePhoneNumber}
        value={phoneNumber}
      ></TextInput>
      <Button title="Sign Up!" onPress={() => loginWithPhoneNumber(phoneNumber)} />
      <Text>Code</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCode}
        value={code}
      ></TextInput>
      <Button title="Check code!" onPress={() => verifyCode(code)} />

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
  }
});
