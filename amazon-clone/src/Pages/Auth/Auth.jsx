import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
// import Layout from "../../Components/LayOut/Layout";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({ signIn: false, signOut: false });
  // console.log(email, password);

  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      // firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          // console.log(userinfo);
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setLoading({ ...loading, signIn: false });
        })
        .catch((err) => setError(err.message));
    } else {
      // signup logic
      setLoading({ ...loading, signOut: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userinfo.user,
          });
          setLoading({ ...loading, signOut: false });
        })
        .catch((err) => setError(err.message));
    }
  };
  // console.log(error);
  return (
    // <Layout>
    <section className={classes.login}>
      <Link to="/">
        {/* Amazon Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon"
        />
      </Link>
      <div className={classes.container}>
        <h2>Sign In</h2>
        <form action="">
          <label htmlFor="email"> Email</label>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <br />
          <button type="submit" onClick={authHandler} name="signin">
            Sign In
          </button>
          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button type="submit" onClick={authHandler} name="signup">
            Create Account
          </button>
          {error ? <small style={{ color: "red" }}>{error}</small> : ""}
        </form>
      </div>
    </section>
    // </Layout>
  );
}

export default Auth;
