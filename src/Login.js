import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase'
function Login() {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const signIn=e=>{
        e.preventDefault();
        //Some fancy fireBase Login stuff........
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        //Some fancy fireBase Resiter........
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                //Successfully created a new user with username and password
                if(auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG13.png" alt="amazon"/>
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className="login_signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By signing-in you agree to AMAZON CLONE
                Conditions of Use & Sale. Please 
                see our Privacy Notice , our Cookies Notice 
                and our Interest-Based Ads Notice </p>
                <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
        
    )
}

export default Login
