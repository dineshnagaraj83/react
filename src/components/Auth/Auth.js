import { useState,useContext } from "react";
import UserContext from "../../utils/UserContext";
import "./Auth.scss"

const userData = [
    {
        username:'dinesh',
        password:'12345'
    },
    {
        username:'vishnu',
        password:'12345'
    },
    {
        username:'naveen',
        password:'12345'
    },
    {
        username:'kumar',
        password:'12345'
    },
    {
        username:'kavin',
        password:'12345'
    }
]

const Auth = ()=>{
    const {loggedIn, setLoggedIn} = useContext(UserContext);
    if(localStorage.getItem('loggedIn')){
        setLoggedIn(true)
    }
    const [credentials, setCredentials] = useState(
        {   username: '',
            password: ''
        }
    )
    
    const [credentialsMatch, setCredentialsMatch] = useState(true);  
    
    const setSuccess = ()=>{
       
        setLoggedIn(true);
        localStorage.setItem('loggedIn',true);
    }

    function handleLogin(){
        let localCredentials = JSON.parse(localStorage.getItem('credentials'))        
        
        if(localCredentials.username === credentials.username && localCredentials.password === credentials.password)
        {
            
            setSuccess();
            setCredentialsMatch(true);

        }else if(userData.some(item=>item.username === credentials.username && item.password === credentials.password))
        {
            setSuccess();
            setCredentialsMatch(true);
        }
        else
        {
            setCredentialsMatch(false);           
        }
        setCredentials(
        {   username: '',
            password: ''
        })
    }
    const handleRegister = ()=>{
        if(credentials.username && credentials.password)
        {   
            localStorage.setItem('credentials', JSON.stringify(credentials));           
            setLoggedIn(true);
            setCredentials(
                {   username: '',
                    password: ''
                })
        }
    }
    
    console.log(loggedIn);

    return(
        
        <div className="login" >
            <div className="lContainer">
                <input 
                    type="text"
                    placeholder="username"
                    value={credentials.username}
                    onChange={(e)=>setCredentials({...credentials,username:e.target.value})}
                    className="lInput"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
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