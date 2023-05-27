import React,{useState} from 'react'
import data from '../db.json';
import './merchant.css'
import Navbar from "./navbar"

const Home = () => {
    let [honda, setHonda] = useState(data.honda);
    let [audi, setAudi] = useState(data.audi);
    let [bmw, setBmw] = useState(data.bmw);
    let [maruti, setMaruti] = useState(data.maruti);

console.log(data)
  return (
    <div>
    <Navbar/>
    {/* // <div style={{backgroundColor:"#f2eeed"}}> */}
    <div>
        <h1><u>Car details</u></h1>

        <h2 className="text">HONDA CAR SPECS</h2>
        <div className="grid">
      {honda.map((el)=>{
        return <div key={el.id} className='cont'>
           <div className='imgContainer'>
            <img src={el.img} alt={el.id} height="100%" width="100%" />
           </div>
           <div className='details'>
            <p>Model name : {el.model}</p>
            <p>Model Year : {el.year}</p>
            <p>Price : {el.price}</p>
            <p>Color of the Model : {el.color}</p>
           </div>
        </div>
      })}
      
      </div>
      <h2 className="text">AUDI CAR SPECS</h2>
        <div className="grid">
      {audi.map((el)=>{
        return <div key={el.id}className='cont'>
           <div className='imgContainer'>
            <img src={el.img} alt={el.id} height="100%" width="100%" />
           </div>
           <div className='details'>
            <p>Model name : {el.model}</p>
            <p>Model Year : {el.year}</p>
            <p>Price : {el.price}</p>
            <p>Color of the Model : {el.color}</p>
           </div>
        </div>
      })}
      </div>
      <h2 className="text">BMW CAR SPECS</h2>
        <div className="grid">
      {bmw.map((el)=>{
        return <div key={el.id}className='cont'>
           <div className='imgContainer'>
            <img src={el.img} alt={el.id} height="100%" width="100%" />
           </div>
           <div className='details'>
            <p>Model name : {el.model}</p>
            <p>Model Year : {el.year}</p>
            <p>Price : {el.price}</p>
            <p>Color of the Model : {el.color}</p>
           </div>
        </div>
      })}
      </div>
      <h2 className="text">MARUTI CAR SPECS</h2>
        <div className="grid">
      {maruti.map((el)=>{
        return <div key={el.id}className='cont'>
           <div className='imgContainer'>
            <img src={el.img} alt={el.id} height="100%" width="100%" />
           </div>
           <div className='details'>
            <p>Model name : {el.model}</p>
            <p>Model Year : {el.year}</p>
            <p>Price : {el.price}</p>
            <p>Color of the Model : {el.color}</p>
           </div>
        </div>
      })}
      </div>
    </div>
    </div>
  )
}

export default Home