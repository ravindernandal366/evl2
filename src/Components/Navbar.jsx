import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const navig = useNavigate();

  function validate(e) {
    if (e.key === "Enter") {
      console.log(e.target.value);
      navig("/search");
    }
    //validation of the input...
  }

  return (
    <div>
      <div>
        {" "}
        <Link to="/"> Go To Dashboard! </Link>{" "}
      </div>
      <input
        type="text"
        placeholder="Search by category"
        className="search_box"
        onKeyDown={validate}
      />
    </div>
  );
}
