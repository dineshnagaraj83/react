import { useSelector } from "react-redux";
import Product from "../Products/Product";

const Cart = () => {

  const cartValue = useSelector(store => store.cart.items)
  console.log(cartValue);

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
