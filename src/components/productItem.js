import CareScale from "./CareScale";

import "../styles/shoppingList.css";

function ProductItem({
  name,
  cover,
  id,
  careTime,
  isBestSale,
  isSpecialOffer,
}) {
  return (
    <li key={id} className="sbt-product-item">
      <img
        className="sbt-product-item-cover"
        src={cover}
        alt={`${name} cover`}
      />
      <div className="">
        {name}
        <div>
          <CareScale careTime={careTime} />
        </div>
        {isBestSale && <span>⭐</span>}
      </div>
      {isSpecialOffer ? <div className="sbt-sales"> Sales </div> : null}
    </li>
  );
}

export default ProductItem;
