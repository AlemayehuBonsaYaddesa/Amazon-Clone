import { useContext, useEffect } from "react";
import "./App.css";
import { DataContext } from "./Components/DataProvider/DataProvider";
import Router from "./Router";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return () => unsubscribe(); // Clean-up
  }, []); // <-- Correct location of dependency array

  return (
    <>
      <Router />
    </>
  );
}

export default App;
