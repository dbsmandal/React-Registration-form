
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import "./RegistrationForm.css";
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");


  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log("handleSubmit")


    addDoc(collection(db, "contacts"), {
      name,
      email,
      mobile,
      country,
      state,
      password,
      cpassword

    })
      .then((responce) => {
        setLoader(false);
        console.log(responce)
        alert("Your message has been submitted👍");

      })
      .catch((error) => {
        alert(error.password);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMobile("");
    setCountry("");
    setState("");
    setPassword("");
    setcPassword("");

  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us </h1>

        <label>Name</label>
        <input
          placeholder="Enter Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <label>Mobile No</label>
        <input
          type={"number"}
          placeholder="Enter Your Mobile No"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <label>Select Country</label>
       
        <select  
          value={country}
          onChange={(e) => setCountry(e.target.value)} >
          <option value="1">India</option>
          <option value="2">Bangladesh</option>
          <option value="3">Nepal</option>
        </select>
        <label>Select State</label>
       
       <select  
         value={state}
         onChange={(e) => setState(e.target.value)} >
         <option value="1">West Bengal</option>
         <option value="2">Delhi</option>
         <option value="3">Mumbai</option>
       </select>
       
      

        <label>Password</label>
        <input
          type={"password"}
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label>Confrim Password</label>
        <input
          type={"password"}
          placeholder="Enter Your Confirm Password"
          value={cpassword}
          onChange={(e) => setcPassword(e.target.value)}
        ></input>

        <button
          type="submit"
          style={{ background: loader ? "green" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>






    </>
  );
};

export default Contact;