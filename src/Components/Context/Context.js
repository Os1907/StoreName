import { createContext, useState } from "react";

export let storeContext = createContext();

export default function ContextContianer({ children }) {
  let [logIn, setLogIn] = useState(false);
  let [display, setdisplay] = useState(true);
  let [SignIn, setSignIn] = useState(false);
  let [SignInDisplay, setSignInDisplay] = useState(true);

  // ==> CHECKOUT SEASONS

  const [shappingMethod, setshappingMethod] = useState(true);
  const [payment, setpayment] = useState(false)
  const [Finshorder, setFinshorder] = useState(false)

  

  return (
    <storeContext.Provider
      value={{
        logIn,
        setLogIn,
        display,
        setdisplay,
        SignIn,
        setSignIn,
        SignInDisplay,
        setSignInDisplay,
        shappingMethod,
        setshappingMethod , 
        payment, 
        setpayment ,
        Finshorder, 
        setFinshorder

      }}
    >
      {children}
    </storeContext.Provider>
  );
}
