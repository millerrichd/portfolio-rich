import React from "react";

function Image({data}) {
  return (
    <div className="text-center">
      <img className="img-fluid" src={data} alt="Picture of Richard Miller" />
    </div>
  )
}

export default Image;