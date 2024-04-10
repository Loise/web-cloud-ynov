import app from "../firebaseConfig";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth(app);
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    'size': 'normal',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
      console.log("recaptcha allowed")
      console.log(response)
    },
    'expired-callback': () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ...

      console.log("recaptcha not allowed")
      console.log("expired-callback")
    }
});