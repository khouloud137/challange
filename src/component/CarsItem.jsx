import React from "react";

function CarsItem(props) {
  return (
    <div className="carsList">
      <div className="carsCard">
        <img src={props.image} alt="car_img" className="Car_Image" />
        <div className="carsCard_content">
          <h3 className="CarsName">{props.name}</h3>
        </div>
        <div className="icones">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>(5.0)</span>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="ImagesCars">
          <div className="liste">
            <div className="parts01">
              <img src={props.parts01} alt="Auto" />
              <p> {props.NameOne} </p>
            </div>
            <div className="parts02">
              <img src={props.parts02} />
              <p>{props.NameTwo}</p>
            </div>
            <div className="parts03">
              <img src={props.parts03} />
              <p>{props.NameThree}</p>
            </div>
          </div>
          <div className="listes">
            <div className="parts04">
              <img src={props.parts04} />
              <p>{props.NameFoor}</p>
            </div>
            <div className="parts05">
              <img src={props.parts05} />
              <p>{props.NameFive}</p>
            </div>
            <div className="parts06">
              <img src={props.parts06} />
              <p>{props.NameSix}</p>
            </div>
          </div>
        </div>
        <div className="locationDetails">
          <div className="listPays">
            <p className="Pays">
              <i class="fa-solid fa-location-dot"></i>
              {props.pays}
            </p>
          </div>
          <div className="listPrice">
            <h6 className="Price">
              {props.price}
              <span>/ Day</span>
            </h6>
          </div>
        </div>
        <div>
          <button className="btn-fixed">
            <span>
              <i class="fa-regular fa-calendar-days"></i>
            </span>
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarsItem;
