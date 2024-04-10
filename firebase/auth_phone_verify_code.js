export const verifyCode = async (code, confirmationResult) => {
    confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        return true;
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        return false;
      });
  };
