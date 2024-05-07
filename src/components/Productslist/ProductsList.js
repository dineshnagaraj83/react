import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import data from "../../utils/data";
import Product from "../Products/Product";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import "./ProductsList.scss"
import { useSelector } from "react-redux";

const ProductsList = ()=>{
    const {type} = useParams();   
    const[productList,setProductList] = useState([])    
    const data_list = data();     
    const[filterRating,setFilterRating] = useState(1);
    const[sort, setSort] = useState('def');
    const productPerPage = 2;
    const[currentPage, setCurrentPage] = useState(1);     
    
    useEffect(()=>
    {
    const filteredList= data_list?.filter((item)=>item.category === type ).filter((item)=>item.rating.rate >= filterRating);
    setProductList(filteredList);    
    },[type,data_list,filterRating]);

    useEffect(()=>{
  
        if(sort === 'low'){  
          setProductList((prev)=>
          [...prev].sort((a,b)=>a.price-b.price))
        }
        if(sort === 'high'){          
          setProductList((prev)=>
                [...prev].sort((a,b)=>b.price-a.price))
        } 
        
        setCurrentPage(1);
      },[sort,filterRating])
    

    const handlePagination = (page)=>{
        setCurrentPage(page);
    }

    
    const LastIndex = currentPage * productPerPage;
    const firstIndex = LastIndex - productPerPage;

    const currentProducts = productList?.slice(firstIndex,LastIndex);   
    
    const cartValue = useSelector((store) => store.cart.items)
    console.log(currentProducts)
   
    return (
        <div className="productList">
            <div className="selection">                
                <div className="filter">
                    <span>Filter by rating:</span>               
                    <select name="Rating" onChange={(e)=>setFilterRating(e.target.value)}>
                        <option default value= {1} >All</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>                        
                    </select>
                </div>
                <div className="Sort">
                    <span>Sort:</span>
                    <select name="Sort" onChange={(e)=>setSort(e.target.value)}>
                        <option default value={"def"}>Popular</option>
                        <option value="low">Price low</option>
                        <option value="high">Price high</option>                        
                    </select>     

                </div>
                <div className="pagination">
                <Pagination length={productList?.length} handleClick={handlePagination} />
                </div>
                <Link to = '/cart'>             
                <span>cart:{cartValue.length}</span> 
                </Link>                
            </div>
            <div>                 
            { 
            productList ===null?
                 <h1>Loading</h1>:
            currentProducts?.map((value)=> 
                  <Link to={"/categories/"+type+"/"+value.id} key={value.id}>
                  <Product  data={value} />
                  </Link>)
            }                 
            </div>
            
        </div>
    )
}

export default ProductsList