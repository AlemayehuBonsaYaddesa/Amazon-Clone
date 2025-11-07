import React from "react";
import categoryImage from "./CategoryData";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
function Category() {
  //   console.log(categoryImage);
  return (
    <div className={classes.category__container}>
      {categoryImage.map((infos, i) => {
        return <CategoryCard data={infos} key={i} />;
      })}
    </div>
  );
}

export default Category;
