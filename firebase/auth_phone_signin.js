import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import "./auth_phone_recaptcha_verifier_simple";

const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
export const loginWithPhoneNumber = async (phoneNumber) => {
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


