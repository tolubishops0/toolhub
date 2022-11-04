import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main>
      <div>
        <h1>
          we can't seem to find the page<br></br> you are looking for Click on
          one of the links above to find your wayy!!
        </h1>

        <button className="home__btn">
          <Link to="/">Continue to HomePage</Link>
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
