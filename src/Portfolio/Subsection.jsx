import React from "react";

function Subsection({data}) {
  const linkKeys = Object.keys(data.links);

  return (
    <>
      <h2 className="text-center bg-success text-white mt-4">{data.title}</h2>
      <p>{data.description}</p>
      <ul>
        {data.bulletpoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
        {linkKeys.map(key => (
          <li key={key}>
            {key === "Email" ? (
              <>{key}: <a href={`mailto:${data.links[key]}`}>{data.links[key]}</a></>
            ) : (
              <>{key}: <a href={data.links[key]}>{data.links[key]}</a></>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Subsection;
