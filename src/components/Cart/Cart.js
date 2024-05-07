import { useSelector } from "react-redux";
import Product from "../Products/Product";

const Cart = () => {

  const cartValuePresent = useSelector(store => store.cart.items);
  const cartValue = (cartValuePresent.length === 0)? JSON.parse(localStorage.getItem('cartItems')):cartValuePresent;
  
  return (
    <div>
    {
      cartValue.map(
        (item)=> <Product data={item} key={item.id} />
      )
    }
    </div>
  )
}

export default Cart
