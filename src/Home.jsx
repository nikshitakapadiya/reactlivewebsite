import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/img9.jpeg";
// import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
  return (
    <>
    <Common 
        name="Grow Your Business with" 
        imgsrc={web} 
        visit='/services' 
        btnname="Get Started"/>
    />
        
    </>
  );
};

export default Home;
