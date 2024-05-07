import data from "../../utils/data"
import { useParams, Link } from "react-router-dom";
import "./ProductInfo.scss"
import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem } from "../../utils/cartSlice";
import { useEffect, useState } from "react";

const ProductInfo = ()=> {

   const {id} = useParams();
   const[addedCart,setAddedCart] = useState(false);
   const data_info = data();   
   
   const item = data_info?.find((e)=> e.id == id); 
   //console.log(item); 
   
   const dispatch = useDispatch()

   const addtoCart = ()=>{
      dispatch(addItem(item))
      setAddedCart(true)
   }
   const cartState = useSelector(state => state.cart.items)

   useEffect(
      ()=>{
         
      
      return ()=>{
         localStorage.setItem('cartItems', JSON.stringify(cartState))
      
      }         
   }      
   ,[cartState])
   //console.log("cart",addedCart);

   if(data_info === null) return(<h1>Loading</h1>);

   return(
   <div>
      <Link to='/cart'>
      <button className="button">Go to Cart({cartState.length})</button>
      </Link>
    <div className="productInfo">
      <img className="image" src={item.image} />
      <div className="productDetails">
         <h3>Title:{item.title}</h3>
         <p>{item.description}</p>           
         <span>Rating:{item.rating.rate}</span>
         <h4>Price:Rs {Math.round(item.price)}</h4>  
         <div className="button1">
            <button className="button" onClick={addtoCart} >{(!addedCart)?"Add to Cart":"Added"}</button>
         </div>      
      </div>
    </div>
    </div>
   )
}

export default ProductInfo

