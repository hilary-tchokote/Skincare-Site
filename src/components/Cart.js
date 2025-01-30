import { useEffect } from "react";
import { productList } from "../datas/productList";
import {  X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function Cart({ cart, updateCart, isCartOpen, setIsCartOpen }) {
  //const [cart, updateCart] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);
  // const isOpen = true;
  const { t } = useTranslation();
  const total = cart.reduce(
    (acc, product) => acc + product.amount * product.price,
    0
  );

  useEffect(() => {
    // alert(`Your cart total is ${total}€ 💸`)
    document.title = `SBT :  ${total}€ 💸`;
  }, [total]);

  //selecting bestsellers products
  // const bestSellers = productList.filter((product) => product.isBestSale).slice(0, 3);
  // Fonction pour mélanger un tableau
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Mélanger la liste des produits
  const shuffledProductList = shuffleArray([...productList]);

  // Filtrer et sélectionner les meilleurs vendeurs
  const bestSellers = shuffledProductList
    .filter((product) => product.isBestSale)
    .slice(0, 3);

  // Augmenter la quantité d'un produit dans le panier
  const handleQuantityChange = (id, newAmount) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: newAmount } : item
      )
    );
  };

  // const addToCart = (product) => {
  //   const productInCart = cart.find((item) => item.id === product.id);
  
  //   if (productInCart) {
  //     updateCart(
  //       cart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, amount: item.amount + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     updateCart([...cart, { ...product, amount: 1 }]);
  //   }
  // };
  

  // const handlePayment = () => {
  //   window.alert(`Your payment of ${total}€ was successful! 🎉`);
  //   updateCart([]);
  // };

  return (
    <div
      className={`sbt-cart-overlay ${isCartOpen ? "open" : ""}`}
      onClick={() => setIsCartOpen(false)}
    >
      <div className="sbt-cart" onClick={(e) => e.stopPropagation()}>
        <button className="sbt-cart-close" onClick={() => setIsCartOpen(false)}>
          {" "}
          <X size={24} />
        </button>

        <h2> {t("your_cart")} </h2>
        {cart.length > 0 ? (
          <div>
            <ul>
              {cart.map(({ id, cover, name, price, amount }, index) => (
                <div
                  key={`${name}-${index}`}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <img
                    src={cover}
                    alt=""
                    style={{
                      width: "50px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                  <p> {name} </p> 
                  <p> {price}€ </p>
                  <select
                    value={amount}
                    onChange={(e) =>
                      handleQuantityChange(id, Number(e.target.value))
                    }
                  >
                    {[...Array(10).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </ul>
            <h3>
              {t("total")} : {total} €
            </h3>
            <button onClick={() => updateCart([])}> {t("empty_cart")} </button>
            
            {/* PayPal Integration */}
            <PayPalScriptProvider
              options={{
                "client-id": "X5BVF9S3M5SBY",
                currency: "EUR",
              }} >
               <PayPalButtons
                   style = {{ Layout: "vertical" }}
                   createOrder = {(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: total,
                            },
                          },
                        ],
                      });
                   }}
                    onApprove = {(data, actions) => {
                       return actions.order.capture().then(() => {
                         alert(`Your payment of ${total}€ was successful! 🎉`);
                         updateCart([]);
                         setIsCartOpen(false);
                       });
                    }}
                />
            </PayPalScriptProvider> 


          
            {/* <button onClick = {handlePayment}> 
              {t("pay")} 
            </button> */}
            
          </div>
        ) : (
          <div>
            <p> {t("empty_cart")} </p>
            <p> {t("add_products")} </p>

            <h3> {t("bestsellers")} </h3>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              {bestSellers.map(({ id, name, cover, price }) => (
                <div key={id} style={{ textAlign: "center" }}>
                  <img
                    src={cover}
                    alt={name}
                    style={{ width: "100px", height: "auto" }}
                  />
                  <p> {name} </p>
                  <p> {price} €</p>
                  <button
                    onClick={() =>
                      updateCart([...cart, { id, name, price, amount: 1 }])
                    }
                  >
                    {t("add_products")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
