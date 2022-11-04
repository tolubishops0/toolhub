import React from "react";
import "./Homepage.css";
import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <form action="#" className="form">
        <input
          className="searchbar"
          type="search"
          placeholder="search here..."
        />
        <button className="search-icon">
          <HiSearch />
        </button>
      </form>
      <div className="home__para">
        <h1>welcome to toolshub</h1>
        <p>
          Esse qui mollit aliquip sunt adipisicing laborum eu aliquip irure.
          Aute esse et fugiat in. <br></br>Velit cupidatat dolore commodo sint
          proident labore commodo eu commodo aliquip anim ad.<br></br> Pariatur
          eiusmod pariatur qui velit eu deserunt <br></br>irure ipsum dolore
          elit. Culpa voluptate ex commodo ipsum sunt labore magna excepteur{" "}
          <br></br> qui anim. Pariatur reprehenderit magna excepteur minim
          cupidatat cillum
          <br></br> incididunt minim elit quis. Voluptate sint voluptate duis
          aliqua nulla do quis eiusmod amet.
        </p>

        <button className="home__btn"> 
        <Link to='/LeaderBoard'>Continue to Leaderboard</Link></button>
      </div>
    </div>
  );
}

export default Homepage;
