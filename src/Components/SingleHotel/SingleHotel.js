import React from 'react';


const SingleHotel = (props) => {
    const {name, image, details} = props.hotel;
    return (
        <div className="card m-3" style={{maxWidth: "540px"}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={image} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <p className="card-text"><small className="text-muted">Cancelation Flexibility Available</small></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;