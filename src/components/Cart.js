import '../styles/cart.css';

function Cart() {
  let face_creamPrice = 8;
  const face_washPrice = 10;
  const face_maskPrice = 15;
  return (
    <div className="bg-red-500">
      <h2> Cart </h2>
      <ul>
        <li> Face cream : {face_creamPrice} € </li>
        <li> Face wash : {face_washPrice} €</li>
        <li> Face mask : {face_maskPrice} €</li>
      </ul>
      Total : {face_creamPrice + face_washPrice + face_maskPrice} €
    </div>
  );
}

export default Cart;
