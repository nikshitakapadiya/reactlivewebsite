import React from 'react';
// import web from "../src/images/homeimg.jpeg";
import { NavLink } from 'react-router-dom';


const Common = (props) => {
  return (
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg col-10">
                <div className="row">
                    <div className ="col-10 max-auto">
                    <div className="row ">
                        <div className="col-mg-10  pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column" >
                            <h1> {props.name} <br />
                            <strong className="brand-name">   
                              Abc Technical
                            </strong></h1>
                            <h2 className="my-3"> We are the team of talented developer making websites</h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btnname}</NavLink>
                            </div>
                            <div className="col-md-12 order-1 order-lg-2 header-img">
                                 <img src={props.imgsrc} className="animated container-fluid" alt="home img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
};

export default Common;
