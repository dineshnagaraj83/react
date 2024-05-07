import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Categories.scss"
import data from "../../utils/data";

const Categories = ()=>{

    const data_cat = data();
    
    
    if(data_cat === null) return(<h1>Loading</h1> )
    

    const categories = data_cat?.map(a=>a.category).reduce( 
               
        (acc, curr)=>{           
            if(!acc.includes(curr))
                acc.push(curr)           
            return acc
        },[])    
    
    
    return (
        <div className="categories">
        {
        categories.map((cat,index)=>
            <Link to={"/categories/"+cat}
               key={index} >
            <div>{cat}</div>
            </Link>)
        }        
        </div>
    )
}

export default Categories;

