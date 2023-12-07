import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);

  const increaseLimit = () => {
    setLimit(limit + 4);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setProducts(res.data));
    // .then((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row row-col-1 row-cols-md-4 g-4">
          {products &&
            products.slice(0, limit).map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          <div className="d-flex offset-md-5">
            <div className="col-5">
              <button className="btn btn-warning" onClick={increaseLimit}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContainer;
