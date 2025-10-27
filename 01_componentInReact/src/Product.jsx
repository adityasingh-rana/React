import './Product.css';
import Price from './price.jsx';
function Product({title, idx}) {
  let amount = [1000, 2000, 3000, 4000];
  let disc = [0, 10, 15, 20];
  let description = [
    ["This is an apple pencil.",
    "This is a laptop."],
     ["This is a bag.",
      "This is a charger."],
    ["This is a bag.",
      "This is a charger."],
    ["This is a bag.",
      "This is a charger."]];
  return (
    <div className="Product" >
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price amount= {amount[idx]} discount = {disc[idx]}/>
    </div>
  );
}

export default Product;