import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  // console.log(data);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.name}</h2>
        </span>
        <img src={data.imgLink} alt="Photo" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
