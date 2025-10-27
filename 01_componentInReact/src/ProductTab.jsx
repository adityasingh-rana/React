import Product from "./Product";
import "./ProductTab.css";

function ProductTab () {
  return (
    <div className="ProductTab">
      <Product title={"apple pencil"} idx = {0}/>
      <Product title={"laptop"} idx = {1}/>
      <Product title={"bag"} idx = {2}/>
      <Product title={"charger"} idx = {3}/>
    </div>
  );
}

export default ProductTab;