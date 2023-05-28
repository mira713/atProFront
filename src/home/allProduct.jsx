import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
import "./home.css"

const AllProduct = () => {
  let work = JSON.parse(localStorage.getItem('worker'));
  let [worker, setWorker] = useState(work);
  let [loading, setLoading] = useState(false)
let [data, setData] = useState([]);
let baseUrl = "https://difficult-jade-boa.cyclic.app";
let navigate = useNavigate();

let getData=()=>{
    fetch(`${baseUrl}/product/getall`, {
        headers: {
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
            console.log('YES', res.data)
          setData(res.data)
        })
        .catch(err => console.log(err))
}
useEffect(()=>{
    getData()
},[])
  return (
    <div>
        <Navbar work={worker} />
        <div style={{display:"flex", justifyContent:"space-around"}}>
      <div>
        <button className="addButton" onClick={()=>navigate('/merchant')}>see original model</button>
      </div>
      <div>
        <button className="addButton" onClick={()=>navigate('/home')}>Dealer page</button>
      </div>
      <div>
        <button className="addButton" onClick={()=>navigate('/allProduct')}>see all secondhand cars</button>
      </div>
      </div>
       {loading? <h1>Loading...</h1>: <div className="mainDetail">
       {data?.map((el) => {
              return (
                <div key={el._id}>
                  <h3>{el.title}</h3>
                  <div>
                    <img src={el.image} />
                  </div>
                  <div>
                    <p>major scratch : {el.scratch}</p>
                    <p>price : {el.price}</p>
                    <p>no. of buyers : {el.buyers}</p>
                    <p>accident registered : {el.accidents}</p>
                  </div>
                </div>
              )
            })}
        </div>}
    </div>
  )
}

export default AllProduct