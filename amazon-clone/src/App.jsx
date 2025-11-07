import "./App.css";
import Carousels from "./Components/Carousel/Carousels";
import Category from "./Components/Category/Category";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
function App() {
  return (
    <>
      <Header />
      <Carousels />
      <Category />
      <Product />
    </>
  );
}

export default App;
