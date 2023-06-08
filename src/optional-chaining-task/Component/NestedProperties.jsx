import React, { useState } from "react";

const NestedProperties = () => {
  const [toggle, setToggle] = useState("");
  const person = {
    name: {
      first: "Usama",
      last: "Shaheer",
      address: {
        city: "Lahore",
        street: "Joher Town",
        pincode: {
          code: "#3000",
        },
      },
      age: 30,
    },
  };
  const toggletheam=()=>{
    setToggle("red")
  }
  const list = {};
  return (
    <>
      <div className="Nested_Properties" style={{backgroundColor:toggle}}>
        <div>
          <button className="toggle-btn" onClick={toggletheam}>toggle</button>
        </div>
        <div className="properties">
          <h1>Nested Properties</h1>
          <p>First Name: {person?.name.first || "not found"}</p>
          <p>Last Name: {person?.name.last || "not found"}</p>
          <p>Age: {person?.name.age || "not found"}</p>
          <p>City: {person?.name.address.city || "not found"}</p>
          <p>Street: {person?.name.address.street || "not found"}</p>
          <p>Pincode: {person?.name.address.pincode.code || "not found"}</p>
        </div>
      </div>
    </>
  );
};
export default NestedProperties;
