import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  let [res,setRes] = useState({});
  let [state,setState] = useState('')
  let baseUrl = "https://difficult-jade-boa.cyclic.app";
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

//      let res = await fetch(`${baseUrl}/dealer`);
//      res = await res.json();
//      let data = await fetch(`${baseUrl}/user`);
//      data = await data.json();
//      console.log(data,res)
//      let info = false
//      data.map((el)=>{
//         if(el.email==formData.email && el.password==formData.password){
//             info = true;
//             localStorage.setItem("worker", JSON.stringify(el));
//             return 
//         }
//      })
//      res.map((el)=>{
//         if(el.email===formData.email && el.password==formData.password){
//             info = true
//             localStorage.setItem("worker", JSON.stringify(el));
//             return
//         }
//      })
//  if(info===false){
//     alert('user not authenticated')
//  }else{
//     navigate('/home')
//  }

fetch(`${baseUrl}/user/login`,{
  method : "POST",
  body : JSON.stringify(formData),
  headers : {
      "Content-type" : "application/json"
  }
}).then(res=>res.json())
.then(res=>{
  {console.log(res)
  localStorage.setItem("token",res.token);
  let el = {name:res.name,email:res.email,role:res.role}
  localStorage.setItem("worker", JSON.stringify(el));
  navigate('/home')}
})
.catch(err=>{
  console.log(err)
  alert('password or email is not correct. Please try again')
})

  };

useEffect(()=>{
  
    if(state===true){
        navigate('/home')
      }
},[state])
  

  return (
    <div className="bodyContain">
      <div className="contain">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" />
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

export default Login;
