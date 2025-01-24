import { useState , useEffect } from "react";


function Cart({ cart, updateCart }) {
  //const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
        (acc, product) => acc + product.amount * product.price,
         0
  )

  useEffect(() => {
    // alert(`Your cart total is ${total}€ 💸`)
    document.title = `SBT :  ${total}€ 💸`
  }, [total])

  return isOpen ?(
    <div className="sbt-cart">
      <button 
        className="sbt-cart-toggle-button"
        onClick={() => setIsOpen(false)}>
           Close 
      </button>
    {cart.length > 0 ? (
      <div>
         <h2> Cart </h2>
         <ul>
            {cart.map(({ name, price, amount},index) => (
                <div key={`${name}-${index}`}>
                   {name} {price}€ x {amount}
                </div>
            ))}
         </ul>
      
      <h3> Total : {total} €</h3>
      <button onClick={() => updateCart([])}> Empty Cart </button>
      </div>
    ) : (
      <div> Your cart is empty </div>
    )} 
    </div>
   
  ) : (
    <div className="sbt-cart-closed">
      <button 
        className="sbt-cart-toggle-button"
        onClick={() => setIsOpen(true)}> 
        Open Cart 
      </button>
    </div>
  );
}

export default Cart;
