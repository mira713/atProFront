import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = (payload) => {
  let worker = payload.work;
  let [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalDaa, setModalData] = useState({})


  const openModal = (car) => {
    setModalOpen(true);
    setModalData(car)
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  let baseUrl = "https://difficult-jade-boa.cyclic.app";

  let getData = async () => {
    let res = await fetch(`${baseUrl}/oem`);
    res = await res.json();
    console.log('newapi', res.data)
    setData(res.data);
  }
  useEffect(() => {
    getData()
    console.log(data)
  }, [])

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setSearchQuery(query);
    setFilteredData(filteredResults);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a className="navbar-logo" href="/home">
            Logo
          </a>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for original product"
              value={searchQuery}
              onChange={handleSearch}
              className="search-input"
            />
            <ul className="search-results">
              {filteredData.map((item) => (
                <li key={item.id} className="search-item" onClick={() => openModal(item)}>
                  {item.title}<hr/>
                </li>
              ))}
            </ul>
          </div>
          <div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "30px" }}>
            <h3>welcome {worker.name}!!<br /><span>({worker.role})</span></h3>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{modalDaa.title}</h2>
            <img src={modalDaa.img} alt={modalDaa.model} />
            <p>Model: {modalDaa.model}</p>
            <p>Price: {modalDaa.price}</p>
            <p>Color: {modalDaa.color}</p>
            <p>Power: {modalDaa.power}</p>
            <p>Max Speed: {modalDaa.maxspeed}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
