import { useSelector } from "react-redux";
import Product from "../Products/Product";

const Cart = () => {

  const cartValue = useSelector(store => store.cart.items)
  console.log('cartValue')

  return (
    <div>
    <h1>Cart</h1>
    </div>
  )
}

export default Cart
