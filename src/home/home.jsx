import React, { useState, useEffect } from 'react';
import Navbar from "./navbar";
import "./home.css";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  let work = JSON.parse(localStorage.getItem('worker'));
  let [worker, setWorker] = useState(work);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [odometer, setOdometer] = useState('');
  const [scratch, setScratch] = useState('');
  const [originalPaint, setOriginalPaint] = useState('');
  const [accidents, setAccidents] = useState('');
  const [buyers, setBuyers] = useState('');
  const [regPlace, setRegPlace] = useState('');
  const [color, setColor] = useState('')
  let [data, setData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(false);
  const [selectedColor, setSelectedColor] = useState('all');
  const [p, setP] = useState('');
  const [m, setM] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data1, setData1] = useState([]);
  const [dealer, setDealer] = useState([])
  let baseUrl = "https://difficult-jade-boa.cyclic.app";

  let getData = (selectedColor) => {
    //console.log(selectedColor)
    if (selectedColor == 'all' || p == "") {
      fetch(`${baseUrl}/product`, {
        headers: {
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
          console.log(res.data)
          setData(res.data)
        })
        .catch(err => console.log(err))
    }
    if (selectedColor !== "all") {
      //console.log(selectedColor)
      fetch(`${baseUrl}/product`, {
        mode: 'cors',
        headers: {
          mode: 'cors',
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
          console.log(res.data)
         let d = res.data.filter((el)=>{
          console.log(el.color)
            if(selectedColor===el.color){
                return el
            }
          })
          setData(d)
          setData1(d)
        })
        .catch(err => console.log(err))
    }
    if (p == "1") {
      fetch(`${baseUrl}/product`, {
        headers: {
          mode: 'cors',
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
          let d = res.data.filter((el)=>el.price<=100000);
          setData(d)
        })
        .catch(err => console.log(err))
    } 
    if (p === '5') {
      fetch(`${baseUrl}/product`, {
        headers: {
          mode: 'cors',
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
          let d = res.data.filter((el)=>el.price>=500000);
          setData(d)
        })
        .catch(err => console.log(err))
    }
    if(m === '1'){
      fetch(`${baseUrl}/product`, {
        headers: {
          mode: 'cors',
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
          let d = res.data.filter((el)=>el.price>=500000);
          setData(d)
        })
        .catch(err => console.log(err))
    }
    if(m==='2'){
      fetch(`${baseUrl}/product`, {
        headers: {
          mode: 'cors',
          "authorization": localStorage.getItem('token')
        }
      }).then(res => res.json())
        .then(res => {
          let d = res.data.filter((el)=>el.price>=500000);
          setData(d)
        })
        .catch(err => console.log(err))
    }
  }
  let getDataAll = ()=> {
    fetch(`${baseUrl}/product/getall`, {
      headers: {
        mode: 'cors',
        "authorization": localStorage.getItem('token')
      }
    }).then(res => res.json())
      .then(res => {
        setData1(res.data)
      })
      .catch(err => console.log(err))
  }
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalOpen1(false);
  };
  let deleteData = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/product/${id}`, {
        method: 'DELETE',
        headers: {
          "authorization": localStorage.getItem('token')
        }
      });
      if (response.ok) {
        getData()
        console.log(`Item with ID ${id} has been deleted.`);
      } else {
        console.error('Error deleting item:', response.status);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }
  const submitForm = async (formData) => {
    let res = await fetch(`${baseUrl}/product/add`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify(formData)
    })
    let data = await res.json();
    console.log(data)
    setOdometer(''); setImage(''); setOriginalPaint(''); setPrice('')
    setAccidents(''); setRegPlace(''); setScratch(''); setTitle('')
    setBuyers(''); setColor("")
    getData()
    closeModal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      image,
      title,
      price,
      color,
      odometer,
      scratch,
      originalPaint,
      accidents,
      buyers,
      regPlace,
    };
    submitForm(formData);
  };
  let editData = (id) => {
    setModalOpen1(true)
  }
  const handleSubmit1 = (event, id) => {
    event.preventDefault();
    const formData = {
      image,
      title,
      price,
      odometer,
      scratch,
      originalPaint,
      accidents,
      buyers,
      regPlace,
    };
    console.log(id, formData)
    submitForm1(id, formData);
  }
  let submitForm1 = async (id, formData) => {
    try {
      const response = await fetch(`${baseUrl}/product/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": localStorage.getItem('token')
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        getData()
        console.log(`Item with ID ${id} has been updated.`);
      } else {
        console.error('Error updating item:', response.status);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
    console.log(data)
    setOdometer(''); setImage(''); setOriginalPaint(''); setPrice('')
    setAccidents(''); setRegPlace(''); setScratch(''); setTitle('')
    setBuyers('')
    getData()
    closeModal();
  }
  useEffect(() => {
    let work = JSON.parse(localStorage.getItem('worker'));
    setWorker(work)
    getData(selectedColor, p,m)
    getDataAll()
    //worker.role==='dealer'|| worker.role=="Dealer"?getData(selectedColor,p):getDataAll()
  }, [selectedColor, p,m])

  if (loading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  return (
    <div className="bodyHome">
      <Navbar work={worker} />
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <div>
        <button className="addButton" onClick={()=>navigate('/merchant')}>see original model</button>
      </div>
      <div>
        {worker.role == 'dealer' || worker.role == "Dealer" ? <button className="addButton" onClick={openModal}>add new detail</button> : ""}
      </div>
      <div>
      <button className="addButton" onClick={()=>navigate('/allProduct')}>see all secondhand cars</button>
      </div>
      </div>
      {isModalOpen && (
        <div>
          <div className="form-modal">
            <div className="form-content">
              <div></div>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Enter Car Details</h2>

              <form onSubmit={handleSubmit}>
                <div className="formGrid">
                  <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                      type="text"
                      id="image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Color:</label>
                    <input
                      type="text"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                      type="text"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="odometer">Odometer:</label>
                    <input
                      type="text"
                      id="odometer"
                      value={odometer}
                      onChange={(e) => setOdometer(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="scratch">Scratch:</label>
                    <input
                      type="text"
                      id="scratch"
                      value={scratch}
                      onChange={(e) => setScratch(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="originalPaint">Original Paint:</label>
                    <input
                      type="text"
                      id="originalPaint"
                      value={originalPaint}
                      onChange={(e) => setOriginalPaint(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="accidents">Accidents:</label>
                    <input
                      type="text"
                      id="accidents"
                      value={accidents}
                      onChange={(e) => setAccidents(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="buyers">Buyers:</label>
                    <input
                      type="text"
                      id="buyers"
                      value={buyers}
                      onChange={(e) => setBuyers(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="regPlace">Registration Place:</label>
                    <input
                      type="text"
                      id="regPlace"
                      value={regPlace}
                      onChange={(e) => setRegPlace(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <div className="detailDiv">
      {worker.role=="dealer" || worker.role=="Dealer"? <div>
      <h2>showing All Products listed by {worker.name}</h2>
        <select value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}>
          <option value="all">select car by its color</option>
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
          <option value="yellow">yellow</option>
          <option value="orange">Orange</option>
          <option value="black">Black</option>
          <option value="grey">Grey</option>
        </select>
        <select value={p}
          onChange={(e) => setP(e.target.value)}>
          <option value="">Select car by Price</option>
          <option value="1">less than 1 lac</option>
          <option value="5">more than 5 lac</option>
        </select>
        <select value={m}
          onChange={(e) => setM(e.target.value)}>
          <option value="">Select car by Milage</option>
          <option value="1">less than 1000 cc</option>
          <option value="2">more than 1000 cc</option>
        </select>
      </div>:<div></div>}
        
        {!data[0]?(<div>
          <h3>No item added by the dealer yet</h3>
          <p>Click on "Add new detail" to add item to your list</p>
          <img alt="empty" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79OWap4RAEOrshlmoDjb9qvPA004EUKExzsIbQlv6UvjE13Hzl_leE8oI4nlR4xN87Wg&usqp=CAU" width="50%"/>
        </div>):""}
          {loading ? <h1>Loading...</h1> : 
            <div style={{width:"87%"}}>
              {worker.role == 'dealer' || worker.role == "Dealer"? <div className="mainDetail">
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
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <button className="addButton" onClick={() => editData(el._id)}>edit</button>
                    <button className="addButton" onClick={() => deleteData(el._id)}>delete</button>
                    {isModalOpen1 && (
                      <div>
                        <div className="form-modal">
                          <div className="form-content">
                            <div></div>
                            <span className="close" onClick={closeModal}>
                              &times;
                            </span>
                            <h2>Enter Car Details</h2>

                            <form onSubmit={(e) => handleSubmit1(e, el._id)}>
                              <div className="formGrid">
                                <div className="form-group">
                                  <label htmlFor="image">Image:</label>
                                  <input
                                    type="text"
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="title">Title:</label>
                                  <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="price">Price:</label>
                                  <input
                                    type="text"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="odometer">Odometer:</label>
                                  <input
                                    type="text"
                                    id="odometer"
                                    value={odometer}
                                    onChange={(e) => setOdometer(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="scratch">Scratch:</label>
                                  <input
                                    type="text"
                                    id="scratch"
                                    value={scratch}
                                    onChange={(e) => setScratch(e.target.value)}
                                    required
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="originalPaint">Original Paint:</label>
                                  <input
                                    type="text"
                                    id="originalPaint"
                                    value={originalPaint}
                                    onChange={(e) => setOriginalPaint(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="accidents">Accidents:</label>
                                  <input
                                    type="text"
                                    id="accidents"
                                    value={accidents}
                                    onChange={(e) => setAccidents(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="buyers">Buyers:</label>
                                  <input
                                    type="text"
                                    id="buyers"
                                    value={buyers}
                                    onChange={(e) => setBuyers(e.target.value)}
                                    required
                                  />
                                </div>

                                <div className="form-group">
                                  <label htmlFor="regPlace">Registration Place:</label>
                                  <input
                                    type="text"
                                    id="regPlace"
                                    value={regPlace}
                                    onChange={(e) => setRegPlace(e.target.value)}
                                    required
                                  />
                                </div>
                              </div>
                              <button type="submit" className="submit-btn">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              )
            })}
              </div>: <div className="mainDetail">
              {data1?.map((el) => {
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
          }
        
      </div>
    </div>
  )
}

export default Home