import React, { useEffect, useState } from 'react'
import data from "../../utils/data";
import Product from './Product';
import { Link } from "react-router-dom";
import "./products.scss"

const Products = (props) => {

const[productList,setProductList] = useState(null)
const {type,sort,filterRating} =props;
const data_list = data(); 
const paginationNumbers = [1,2,3,4,5];

useEffect(()=>
{
  const filteredList= data_list?.filter((item)=>item.category === type ).filter((item)=>item.rating.rate >= filterRating);
  setProductList(filteredList);    
},[type,data_list,filterRating])   

useEffect(()=>{
  
  if(sort === 'low'){  
    setProductList((prev)=>
    [...prev].sort((a,b)=>a.price-b.price))
  }
  if(sort === 'high'){          
    setProductList((prev)=>
          [...prev].sort((a,b)=>b.price-a.price))
  }    
},[sort,filterRating])
  
  
  return (
    <>
      <div>             
          { productList?.map((value)=> 
                  <Link to={"/categories/"+type+"/"+value.id} key={value.id}>
                  <Product  data={value} />
                  </Link>)
          }      
      </div>
      <div className="pagination">
        {
            paginationNumbers.map(
                (v)=>(<button key={v}>{v}</button> )
            )
        }
      </div>
    </>       
  )  
}

export default Products


                
        