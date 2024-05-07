import { useState,useContext } from "react";
import UserContext from "../../utils/UserContext";
import { userData } from "../../utils/constants";
import "./Auth.scss"

const Auth = ()=>{
    
    const {loggedIn, setLoggedIn} = useContext(UserContext);
    
    if(localStorage.getItem('loggedIn')){
        setLoggedIn(true)
    }
    const [inputCredentials, setInputCredentials] = useState(
        {   username: '',
            password: ''
        }
    )
    
    const [credentialsMatch, setCredentialsMatch] = useState(true);  
    
    const setSuccess = ()=>{
       
        setLoggedIn(true);
        localStorage.setItem('loggedIn',true);
        setCredentialsMatch(true);
    }

    function handleLogin(){
        let localCredentials = JSON.parse(localStorage.getItem('credentials'))        
        
        if(localCredentials?.username === inputCredentials.username && localCredentials.password === inputCredentials.password)
        {
            
            setSuccess();
            
        }else if(userData.some(item=>item.username === inputCredentials.username && item.password === inputCredentials.password))
        {
            setSuccess();
            
        }
        else
        {
            setCredentialsMatch(false);           
        }
        setInputCredentials({ username: '',password: ''});
    }

    const handleRegister = ()=>{
        if(inputCredentials.username && inputCredentials.password)
        {   
            localStorage.setItem('credentials', JSON.stringify(inputCredentials));           
            setLoggedIn(true);           
        }
    }
    
    console.log(loggedIn);

    return(
        
        <div className="login" >
            <div className="lContainer">
                <input 
                    type="text"
                    placeholder="username"
                    value={inputCredentials.username}
                    onChange={(e)=>setInputCredentials({...inputCredentials,username:e.target.value})}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={inputCredentials.password}
                    onChange={(e)=>setInputCredentials({...inputCredentials,password:e.target.value})}
                    className="lInput"
                />
                                
                <button className="lButtonlogin" onClick={handleLogin}>Log in</button>
                
                {!credentialsMatch && <span>Please enter the correct credentials</span>}  

                <span>New to the store? Register</span>

                <button className="lButtonRegister" onClick={handleRegister}> Register</button>
            </div>
        </div>
        
    )
}

export default Auth;