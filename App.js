/*import React from 'react';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import EbookStore from './Ebookstore';
import BuyNow from './BuyNow';

function App() {
  return (
    <div >
      <Router>
     <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/ebook" element={<EbookStore />} />
        <Route path="/buynow" element={<BuyNow />} />
      </Routes>
      </Router>
      

   
    </div>
  );
}

export default App;*/
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EbookStore from './Ebookstore';

import './App.css';
import Login from './Login';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/cart" element={<Cart/>} />
    
      </Routes>
    </Router>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';

import ContactPage from './ContactPage';

import SignUpPage from './SignUpPage';

import Ebookstore from './Ebookstore';
import AboutUs from './AboutUs';
import Cart from './AddtoCart';
import Homepage from './Ebookstore';
import Checkout from './checkout';

const App = () => {
  return (
    <Router>
   
       
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/ebook" element={<Homepage/>} />
          
   
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Login />} />
          
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
   
    </Router>
  );
};

 export default App;
/*
import './App.css';
import { useState,useEffect,onChangeHandler } from 'react';
import {Button,EditableText,InputGroup,Toaster} from '@blueprintjs/core';
import "@blueprintjs/core/lib/css/blueprint.css";

import "@blueprintjs/core/lib/css/blueprint.css";
const AppToaster=Toaster.create({
  position:"top"
})
function App()
{
  const [users,setusers]=useState([]);
  const[newName,setnewName]=useState("");
  const[newEmail,setnewEmail]=useState("");
  const[website,setNewWebsite]=useState("");
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>(response.json()))//to convert it into a json data we   are using response.json
//it is an arrow function it will return some data which we are getting int next .then()
//all these response and json are user defined like what the arrow function returns or fetch function
//returns it will take that
.then((json)=>setusers(json));

},[])
//adduser function is used to add the values from the form to the list
function adduser()
{
const name=newName.trim();//we ar converting it into constant bcos we are trimming it so that
//to reduce the space
const email=newEmail.trim();
const websit=website.trim();
//if all the name,email,website all present only we will add
//to add the json string we are using json.stringify
if(name && email && websit)
{
  fetch("https://jsonplaceholder.typicode.com/users",
  {
    method: "POST",
    body: JSON.stringify({
      name,
email,
website
    }),
    headers:{
"Content-Type":"application/json; charset=UTF-8"
    }
  }
).then((response)=>response.json())
//we are usinf spread operator to add the data to the existing data
//we are using 
.then(data=>{
  setusers([...users,data]);
  AppToaster.show({
    message :"user added successfully",
    intent: 'success',

})
//to remove the input box after postinf
setnewName("");
setnewEmail("");
setNewWebsite("");
})
}
}
function onChangeHandler(id,key,value)
{
  //we want to return the user such as for setusers 
setusers((users)=>{
   return  users.map(user=>{
     return user.id === id ? {...user, [key]:value} :
      user;
    })
  })
}
function updateUser(id)
{
  const user=users.find((user)=>user.id === id)
  fetch(`https://jsonplaceholder.typicode.com/users/10`,//we can use ${id} instead of 10 since json server is only upt o 10
    //so when adding date for meore than id 10 it will add to id 10
    {
      method: "PUT",
      body: JSON.stringify(user),
      headers:{
  "Content-Type":"application/json; charset=UTF-8"
      }
    }
  ).then((response)=>response.json())
  //we are usinf spread operator to add the data to the existing data
  //we are using 
  .then(data=>{
    //we do not need the below line since we are not going to create we are going to update
   // setusers([...users,data]);
    AppToaster.show({
      message :"user updated successfully",
      intent: 'success',
  
  })
})
}
function deleteUser(id)
{
  
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
      //no data is being send so no nedd of body and content type if we send any data we need ll these
  //     body: JSON.stringify(user),
  //     headers:{
  // "Content-Type":"application/json; charset=UTF-8"
  //     }
    })
    .then((response)=>response.json())
  //we are usinf spread operator to add the data to the existing data
  //we are using 
  .then(data=>{
  setusers((users)=>{
      return users.filter(user=>user.id !== id)
    })

    AppToaster.show({
      message :"user deleted successfully",
      intent: 'success',
  timeout:3000
  })
})
}
  return(
    //we are using user array so we are using map
    //here we are using user.id as key similar to primary key in dbms
    //here the value which we mention new email ,new website etc.. are state and we are getting he value which is 
    //being stored
    <div className="App">
      <table className='bp4-html-table modifier'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </thead>
        
        <tbody>
          
          {users.map(user=> 
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td><EditableText onChange={value=>onChangeHandler(user.id,'email',value)} value={user.email}/></td>
            <td><EditableText onChange={value=>onChangeHandler(user.id,'website',value)}  value={user.website}/></td>
            <td>
              <Button intent='primary' onClick={()=>updateUser(user.id)}>UPDATE</Button>
              &nbsp;
            <Button intent='danger' onClick={()=>deleteUser(user.id)}> DELETE</Button>
            </td>
          </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
             <InputGroup  value={newName} onChange={(e)=>setnewName(e.target.value) }placeholder="Enter Name..."/>

            </td>
           
            <td>
             <InputGroup  value={newEmail} onChange={(e)=>setnewEmail(e.target.value) }placeholder="Enter Email..."/>

            </td>
            <td>
             <InputGroup  value={website} onChange={(e)=>setNewWebsite(e.target.value) }placeholder="Enter Website..."/>

            </td>
            <td>
              <Button intent='success' onClick={adduser}>Add User</Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
export default App;
*//*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EbookStore from './Ebookstore';
import Cart from './AddtoCart';
import { CartProvider } from './cartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/ebook" element={<EbookStore />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;*/
