/** @format */

import React from "react";

const UniverseCompany = ({image,content}) => {
  return (
        <div className=' mt-5 col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center '>
          <img className="w-50" src={image} alt='' />
          <p className=" py-4 UC fw-semibold text-center text-muted  w-75 w-sm-50">
            {content}
          </p>
        </div>
  );
};

export default UniverseCompany;
