import ReactDOM from "react-dom/client"
import Auth from "./components/Auth/Auth";
import Categories from "./components/Categories/Categories";
import ProductsList from "./components/Productslist/ProductsList"; 
import ProductInfo from "./components/ProductInfo/ProductInfo";
import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart/Cart";



const AppLayout = ()=>{



    const[loggedIn, setLoggedIn] = useState(false);
    
    
    
    return(
        <div>
            <UserContext.Provider value={{loggedIn,setLoggedIn}}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {loggedIn?<Redirect to='/categories'/>: 
                        <Auth />}
                    </Route>
                    <Route exact path="/categories">
                        <Categories />
                    </Route>
                    <Route exact path="/categories/:type">
                        <Provider store={appStore}> 
                            <ProductsList />
                        </Provider>
                    </Route>
                    <Route path="/categories/:type/:id">
                        <Provider store={appStore}> 
                            <ProductInfo />
                        </Provider>
                    </Route> 
                    <Route path="/cart">
                        <Provider store={appStore}> 
                            <Cart />
                        </Provider>
                    </Route>                    
                </Switch>
            </Router>
            </UserContext.Provider>
        
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);