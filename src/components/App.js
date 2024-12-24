//import logo from './logo.svg'
import "../App.css";
import "../index.css";
import Banner from "./Banner";
// import Cart from "./Cart";
import ShoppingList from "./ShoppingList"
import logo from '../assets/logo.jpg'
import '../styles/banner.css'
import QuestionForm from './QuestionForm'
// import CareScale from "./CareScale";
// import ProductItem from "./productItem";



function App() {
  return (
    <>
      <Banner>
          <img src={logo} alt='Skincare by Tich' className='sbt-logo' />
          <h1 className="sbt-title text-red-400"> 
            SKINCARE BY TICH
         </h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList/>
      {/* <CareScale/>
      <ProductItem/>*/}
      <QuestionForm /> 
    </>
  );
}
export default App;
