import React from "react";
import { NavLink } from "react-router-dom";

const softTechHrmPage = () => {
  return (
    <div>
      <div className="my-28" >
        <h1>Soft Tech HRM Solution</h1>
        <p>
          Time consuming HR operations will be done within seconds with just 1
          Click!
        </p>
        <button>
          <NavLink to = {""} >
            <span>
                <i className="fa-solid fa-street-view" ></i>
            </span>
            Request Demo
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default softTechHrmPage;
