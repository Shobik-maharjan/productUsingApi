import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  const pid = params.productId;

  // fetch product

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [pid]);
  return (
    <>
      <div className="container">
        <div className="card mb-3 shadow p-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.image}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-title">${product.price}</h5>
                <p>
                  <strong>Category:</strong>
                  {product.category}
                </p>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
