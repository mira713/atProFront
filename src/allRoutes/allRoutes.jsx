import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homes from '../authenticate/home';
import Register from "../authenticate/register";
import Login from '../authenticate/login';
import Home from '../home/home';
import Merchant from '../home/merchant'

const AllRoutes = () => {
  return (
    <div>
<Routes>
    <Route path="/" element={<Homes/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/merchant" element={<Merchant/>}/>
</Routes>
    </div>
  )
}

export default AllRoutes