import { productList } from "../datas/productList"
import '../styles/shoppingList.css'
import ProductItem from "./productItem"


function ShoppingList() {
    const uniqueCategories = productList.reduce(
        (categories, product) => 
            categories.includes(product.category) ? categories : categories.concat(product.category), []
        
    )

    return (
        <div>
             <ul>
                  {uniqueCategories.map((category) => (
                <li key={{category}}> {category} </li>
               ))}
            </ul>
            <ul className='sbt-product-list'>
                {productList.map((product) => (
        
                <ProductItem
                key={product.id} 
                id={product.id}
                cover={product.cover}
                name={product.name}
                careTime={product.careTime}
                isBestSale={product.isBestSale}
                isSpecialOffer={product.isSpecialOffer}
                // className='sbt-product-item'

                />
                ))}
        
            </ul>

        </div>
    )
}

export default ShoppingList
