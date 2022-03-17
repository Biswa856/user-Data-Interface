import React, { useState } from 'react'
export default function AssignHeader(props) {

    var data = props.data;
    const setFilterData = props.setFilterData;
    


    function handlechange(e) {

        var namedata = data.filter((ele) => {
            var name = Object.values(ele.name).join(" ");
            console.log(name.toLowerCase());
            console.log(e.target.value.toLowerCase());
            return name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        e.target.value==''?setFilterData(data) : setFilterData(namedata)

    }


    return (

        <nav className="navbar navbar-light bg-light justify-content-between">
            <p className="navbar-brand">
                <img src='logo192.png' style={{height:"50px"}} />
            </p>
            <form className="form-inline d-flex"  >
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" onChange={handlechange} />

            </form>
        </nav>
    )
}