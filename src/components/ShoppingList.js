import { useState } from "react"
import { productList } from "../datas/productList"
import '../styles/shoppingList.css'
import ProductItem from "./productItem"
import Categories from "./Categories"


function ShoppingList({ cart, updateCart}) {
    const [activeCategory, setActiveCategory ] = useState('')

    const uniqueCategories = productList.reduce(
        (categories, product) => 
            categories.includes(product.category) ? categories : categories.concat(product.category), 
            []
        
    )

    function addToCart(name, price) {
        const currentProductSaved = cart.find((product) => product.name === name)
        if (currentProductSaved) {
              const cartFilteredCurrentProduct = cart.filter(
                (product) => product.name !== name
              )
              updateCart([
                 ...cartFilteredCurrentProduct,
                 { name, price, amount: currentProductSaved.amount + 1}
              ])
        } else {
               updateCart([
                  ...cart, { name, price, amount: 1}
               ])
        }
    }

    return (
        <div className="sbt-shopping-list"> 
             <Categories
                categories={uniqueCategories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='sbt-product-list'>
             {productList.map(({ id, cover, name, careTime, price, category, isBestSale, isSpecialOffer}) => (
              !activeCategory || activeCategory === category ? (
              <div key={id}>
                 <ProductItem 
                  cover={cover}
                  name={name}
                  careTime={careTime}
                  isBestSale={isBestSale}
                  isSpecialOffer={isSpecialOffer}
                  price={price}
                   // className='sbt-product-item'
                 />
                 <button className="sbt-cart-add-button"
                  onClick={() => addToCart(name, price)}>
                   Add to Cart
                 </button>
               </div>
                ) : null

                ))}
        
            </ul>

        </div>
    )
}

export default ShoppingList
