import React from "react";
import Card from "../../components/Card/Card";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <div className="carouselContainer">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/hero1.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption ">
                <div className="textContainer">
                  <h5>Welcome to PurBnB</h5>
                  <p>Prove to your cat that you care!</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/hero2.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption ">
                <div className="textContainer">
                  <h5>For chill and very active cats!</h5>
                  <p>
                    You can check with the host if there are enough beds or
                    obstacles for you friend
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/hero3.jpeg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption ">
                <div className="textContainer">
                  <h5>Go to your trip with no worries!</h5>
                  <p>Your cat will be in good hands</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="home__section">
        <Card
          src="/images/CatT.png"
          title="Tent house"
          price="$50/night"
          description="Unique mysterious tent."
        />
        <Card
          src="/images/CatM.png"
          title="Entire white home"
          price="$70/night"
          description="Comfortable private room for  white cats."
        />
      </div>
      <div className="home__section">
        <Card
          src="/images/CatP.png"
          title="Penthouse in Downtown"
          price="$150/night"
          description="Superhost with great amenities."
        />
        <Card
          src="images/CatH.png"
          title="Hidden Hills Mansion"
          price="$250/night"
          description="Private spacious hidden galor."
        />
      </div>
    </div>
  );
}
