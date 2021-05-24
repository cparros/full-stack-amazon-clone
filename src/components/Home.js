import React from "react";
import Product from "./Product";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id='293855'
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={30.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
          id='234568'
            title="Wyze Cam v3 1080p HD Indoor/Outdoor Video Camera for Security, Pets, Baby Monitor, w/Color Night Vision, 2-Way Audio, Works with Alexa & Google"
            price={29.98}
            image="https://images-na.ssl-images-amazon.com/images/I/61DJRLNgyWL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id='006984'
            title="$10 Xbox Gift Card [Digital Code]"
            price={10.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61CO3FA7h4S._SL1500_.jpg"
            stars={3}
          />
          <Product
            id='958833'
            title="Amazon Reload"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41rPcyZJ3nL._AC_.jpg"
            rating={5}
          />
          <Product
            id='338275'
            title="$10 PlayStation Store Gift Card [Digital Code]"
            price={9.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61-BT%2BTBduS._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
          id='839283'
            title="VIOTEK GNV29CB Ultrawide Curved 29-Inch Gaming Monitor | 120Hz UWFHD 21:9 w/Immersive 1200R VA Panel | FreeSync, G-SYNC-Compatible | 3-Year Warranty, 0-Tolerance Dead Pixel Policy (VESA)"
            price={229.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81hZ7jc1rwL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
