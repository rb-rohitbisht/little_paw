import React, { useState } from "react";
import Categories from "./Categories";


const divStyle = {
  border: "1px solid black",
};


const Category = () => {
  const [data, setData] = useState(Categories);
  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <>
      <div>
        <h1 className="food " style={{color:"red"}}>Dog's Food</h1>
      </div>
      <div className="container-fluit ">
        <div className="row mt-5 mx-2">
          <div className="col-md-2 " style={divStyle}>
          
            <button type="button" class="btn w-100 mb-4 ">
            
            
             <b>BRAND</b>
              <i class="fas fa-search mx-4 "></i>
            </button>
            
            <hr></hr>
            <button
              type="button"
              class="btn w-100 mb-4"
              onClick={() => filterResult("Acana")}
            >
              Acana
            </button>
            <button
              type="button"
              class="btn w-100 mb-4"
              onClick={() => filterResult("Arden Grange")}
            >
              Arden Grange
            </button>
            <button
              type="button"
              class="btn w-100 mb-4"
              onClick={() => filterResult("Cesar")}
            >
              Cesar
            </button>
            <button
              type="button"
              class="btn w-100 mb-4"
              onClick={() => filterResult("Chappi")}
            >
              Chappi
            </button>
            <button
              type="button"
              class="btn w-100 mb-4"
              onClick={() => setData(Categories)}
            >
              All Brand
            </button>
          </div>
          <div className="col-md-10">
            <div className="row">
              {data.map((values) => {
                const { id, price,title, image } = values;
                return (
                  <>
                    <div className="col-md-3 mb-4" key={id}>
                      <div className="card">
                        <img src={image} class="card-img-top" alt="..." />
                        <div className="card-body">
                          
                          <p className="card-text" key={title}>
                          {title}
                          </p>
                          <h4> <p>Price:${price}</p></h4>
                          <a href="#" className="card-link  btn btn-primary">
                          <i class="fas fa-heart"></i>
                          
                        
                          </a>
                          <a href="#" className="card-link btn btn-primary">
                          
                            Add To Card
                          </a>
                          
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

