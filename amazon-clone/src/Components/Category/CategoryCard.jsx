import React from "react";
import classes from "./Category.module.css";

function CategoryCard({ data }) {
  //   console.log(data);
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.name}</h2>
        </span>
        <img src={data.imgLink} alt="Photo" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
