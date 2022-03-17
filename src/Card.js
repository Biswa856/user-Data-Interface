import React, { useEffect, useState } from 'react'
import { Circles } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Card(props) {

    const data = props.data;
    const isLoaded = props.isLoaded;

    function showAddress(location) {

        let street = Object.values(location.street).join(" ")

        location = Object.values(location)
        location = location.filter((element) => typeof (element) != "object")
        let address = Object.values(location).join(" ")
        return street + " " + address;
    }

    function showName(name, age) {
        name = Object.values(name).join(" ")
        return `${name} |${age}`
    }

    if (!isLoaded) {
        return (
            <div className="loader d-flex" style={{ justifyContent: "center", minHeight: "100vh", alignItems: "center" }} >
                <Circles height="100" width="100" color="grey" ariaLabel="loading" />
            </div>
        )
    }
    return (

        <div className="container">
            <div className="row">
                {!data.length ? <div><h2>No Result Found</h2></div> :
                    data.map((element, index) => {
                        return <div className="col-lg-4 col-sm-12  mb-2 mt-2" key={index} >


                            <div className="card flex-row flex-wrap" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
                                <div className='d-flex'>

                                    <img className='rounded-circle card-header border-0 ' src={element.picture.thumbnail} style={{ width: "100px", height: "100px" }} alt='' />

                                    <div className="card-block px-2" >
                                        <h5 className="card-title fs-5">{showName(element.name, element.dob.age)}</h5>
                                        <p className="card-text mb-0">{element.email}</p>
                                        <p className="card-text mt-0" style={{ fontSize: "small" }}>{showAddress(element.location)}</p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    })
                }



            </div>
        </div>



    )
}
