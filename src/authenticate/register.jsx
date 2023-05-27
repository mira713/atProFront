import React,{useState, useEffect} from 'react';
import "./auth.css";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [field, setField] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
let baseUrl = "https://difficult-jade-boa.cyclic.app";
let navigate=useNavigate()
  const handleChange = e => {
    setField({
      ...field,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =async( e )=> {
    e.preventDefault();
    try{
      let res = await fetch(`${baseUrl}/user/register`,{
        method : "POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(field)
    })
    let data = await res.json();
    console.log(data)

    navigate('/login')
    }catch(e){
      console.log(e.message)
      setField({
        name: '',
        email: '',
        password: '',
        role : ""
      });
    }
    
  };

  return (
    <div className="bodyContain">
      <div className="contain" style={{ maxWidth: '550px' }}>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="name"
              value={field.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={field.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={field.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              type="text"
              id="role"
              name="role"
              value={field.role}
              onChange={handleChange}
              required
            >
                <option>Choose your Role</option>
              <option>Dealer</option>
              <option>User</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Signup" />
          </div>
          <div className="form-group">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms" className="terms">
              I agree to the Terms and Conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
