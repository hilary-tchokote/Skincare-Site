//import logo from './logo.svg'
import "../App.css";
import "../styles/index.css";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.jpg";
import "../styles/banner.css";
// import QuestionForm from './QuestionForm'
import Footer from "./footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import '../i18n';
// import CareScale from "./CareScale";
// import ProductItem from "./productItem";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <div>
      <Banner>
        <img src={logo} alt="Skincare by Tich" className="sbt-logo" />
        <h1 className="sbt-title text-red-400">SKINCARE BY TICH</h1>
      </Banner>
      <Navbar setIsCartOpen={setIsCartOpen} />
      <div className="sbt-layout-inner">
       
        <Cart cart={cart} updateCart={updateCart} 
           isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} 
        />
   
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}
export default App;
