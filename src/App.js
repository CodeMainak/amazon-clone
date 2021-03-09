import React,{useEffect,Suspense} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase';
import {useStateValue} from './StateProvider'
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import image2 from './images/image-high.jpg'
//const promise=loadStripe("pk_test_51H5X25IDnqIQVLBIak6kewTeMRnJEwbzW3B8PKXqSP5GRNJ2LSuvRRBHs03l1VYt33kgkptkARwxDuOfnNOcjdbJ00H7hYLC9I");
function App() {
  //BEM
  //<Header/>
  //<Home/>
  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("The USER IS>>>",authUser)
      if(authUser){
        //The user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        }) 
      }else{
        //The user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        }) 
      }
    })
  }, [])
  return (
    
    <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>

        <Payment />
      
    </Route>
      <Route path="/">
        <h1>Images</h1>
        <Suspense fallback={<h1>Loading....</h1>}>        
          <img src={image2} alt="images"></img>
          </Suspense>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}


export function Loader() {
   return (
       <h1>Loading.........</h1>
   )
 }
 
 export default App
 