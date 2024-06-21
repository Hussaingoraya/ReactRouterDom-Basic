import React from "react";
import { products } from "../Data/ProductsDetail";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  // navigate hook
  let navigate = useNavigate()
  const handleOnClick = (pid) =>{
    navigate("/products/" + pid)
  }
  return (
    <div className="container my-5">
      <div className="row">
        {products.map((item) => (
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.id}</h5>
                <p className="card-text">{item.name}</p>
                <p className="card-text">
                  PRICE: RS
                  {" " + item.price}
                </p>
                <Link to={`/products/${item.id}`}>View Details</Link>{" "}
              </div>
            </div>
            <button type="button" class="btn btn-primary mx-2" onClick={()=>handleOnClick(item.id)}>
        Add to cart
      </button>
          </div>
        ))}
      </div>
      
      {/* <div className="my-5">
     
      <button type="button" class="btn btn-secondary">
        2nd Card
      </button>
      <button type="button" class="btn btn-success mx-2">
        3rd Card
      </button>

      </div> */}
     
    </div>
  );
}
