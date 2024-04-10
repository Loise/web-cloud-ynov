//import "../firebaseConfig";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();
console.log(auth);
export const loginWithPhoneNumber = async (phoneNumber) => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    console.log(window.recaptchaVerifier)
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult)
      return confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log("SMS not sent")
      console.log(error);
    });
  };


