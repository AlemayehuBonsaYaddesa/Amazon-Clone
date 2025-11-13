import React, { useContext } from "react";
// import Logo from "../../../public/Logo.png";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import LowerHeader from "./LowerHeader";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);

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
            <Link to="/auths">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
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
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
