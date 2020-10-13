import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className= "bg bg-image">
            <div className = "container-fluid p-0">
                <div className = "row d-flex align-items-center row-margin">
                    <div className ="col-5 hero-container-text">
                        <h1 className= "hero-heading">Cox's Bazar</h1>
                        <p className= "text-white">
                        Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                        <Link to = "destination/coxs"><button className="btn-color">Booking</button></Link>
                    </div>


                    <div className = "col-7 d-flex align-items-center pl-5">
                        <Link to = "/destination/coxs">
                        <div className="card-one card-size mr-4">
                        <h1 className = "card-heading p-3">Cox's Bazar</h1>
                        </div>
                        </Link>
                        <Link to = "/destination/sreemangal">
                        <div className="card-two card-size mr-4">
                        <h1 className = "card-heading p-3">sreemangal</h1>
                        </div>
                        </Link>
                        <Link to = "/destination/sundarbans">
                        <div className="card-three card-size">
                        <h1 className = "card-heading p-3">sundarbans</h1>
                        </div>
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Home;