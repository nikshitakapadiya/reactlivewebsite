import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
      fullName: "",
      email: "",
      phone: "",
      message: ""
  });  

  const InputEvent =(event) =>{

      const {name, value } = event.target;

      setData((preVal) =>{
          return {
              ...preVal,
              [name] : value,
          };
      });
  };

  const formSubmit =(e) =>{
      e.preventDefault();
      alert(`My name is ${data.fullName}. My Email Address is ${data.email}. My Mobile number is  ${data.phone}. And Here i want to say  ${data.message}.`)
  };

  return (
    <>
        <div className="my-5">
            <h1 className="text-center"> Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    name="fullName"
                    value={data.fullName}
                    onChange={InputEvent}
                    placeholder="Enter Your Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="Enter Your Email address" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone No</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent} 
                    placeholder="Enter Your mobile no." />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    name="message"
                    value={data.message}
                    onChange={InputEvent} 
                    rows="3"></textarea>
                </div>
                <div className="col-12">
                    <button className="btn btn-outline-secondary" type="submit">Submit form</button>
                </div>

                </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
