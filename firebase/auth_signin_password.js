import "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from 'react-native-toast-message';

const showToast = () => {
    console.log("show toast")
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }

  
const auth = getAuth();
export const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);
            console.log("signin success")
            showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
        });
}