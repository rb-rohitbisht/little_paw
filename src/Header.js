import React from "react";
import img from '../src/img.jpg'
import 'bootstrap/dist/css/bootstrap.css';

import './Header.css';

const Header = () => (
  <div className="header">
  {/* <img src={img} class="img-fluid"  alt="Responsive image"></img> */}
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">LittlePaw</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2  ml-lg-5">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Dogs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Food</a>
      </li>
    </ul>
    <img src={img} class="img-fluid mx-auto "   alt="Responsive image"></img>
    <form class="form-inline  ">
      <input class="form-control " type="search" placeholder="Search"></input>
      <button class="btn btn-outline-success mt-2" type="submit">Sort By</button>
    </form>
  </div>
</nav>
    
  </div>
)
export default Header;