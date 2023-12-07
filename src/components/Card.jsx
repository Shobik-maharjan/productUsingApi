import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <div
        className="card mx-3"
        style={{
          width: "20rem",
        }}
      >
        <img
          src={data.image}
          alt="Card image cap"
          style={{ width: "150px", height: "150px", objectFit: "scale-down" }}
        />
        <div className="card-body">
          <h5 className="card-title">{data.title.slice(0, 20)}</h5>
          <h5>${data.price}</h5>
          <Link to={`/productDetails/${data.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
