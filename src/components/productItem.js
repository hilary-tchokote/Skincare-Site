import CareScale from "./CareScale";

import "../styles/shoppingList.css";

function handleClick(name) {
//   // console.log('✨ Ceci est un clic ✨')
  alert(`You are buying 1 ${name} ? Nice choice!`)
 }

function careScaleClick(careTime) {
  alert (`This product should be used ${careTime}`)

}

function ProductItem({
  name,
  cover,
  id,
  careTime,
  isBestSale,
  isSpecialOffer,
  
}) {
  return (
    <li key={id} className="sbt-product-item" onClick={() => handleClick(name)} > 
      <img
        className="sbt-product-item-cover"
        src={cover}
        alt={`${name} cover`}
      />
      <div>
        {name}
        <div >
          <CareScale careTime={careTime} onClick={() => careScaleClick(careTime)} />
        </div>
        {isBestSale && <span>⭐</span>}
      </div>
      {isSpecialOffer ? <div className="sbt-sales"> Sales </div> : null}
    </li>
    
  );
}

export default ProductItem;
