import React, { useContext } from "react";
// import Logo from "../../../public/Logo.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";
import { signOut } from "firebase/auth";
import { Type } from "../../Utility/action.type";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem =
    basket?.reduce((amount, item) => item.amount + amount, 0) || 0;

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              {/* Amazon Logo */}
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon"
              />
            </Link>

            {/* Delivery */}
            <div className={classes.delivery}>
              <div>Delivered to</div>
              <SlLocationPin />
            </div>
          </div>

          <div className={classes.search}>
            {/* Search bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" placeholder="Search product" />
            {/* Icon */}
            <IoSearch />
          </div>

          {/* right side link */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://www.shutterstock.com/image-photo/us-american-flag-full-frame-260nw-2609455371.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* links */}
            <Link to={!user && "/auths"}>
              <div>
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}</p>
                    <span onClick={logoutHandler}>SignOut</span>
                  </>
                ) : (
                  <>
                    <p>Sign in</p>
                    <span>Account & lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* Orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            {/* Cart */}
            <Link to="/carts" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
