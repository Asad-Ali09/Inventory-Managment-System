import React from "react";

const ExchangeCard = ({ image, title, year, url }) => {
  return (
    <div className="exchange-card" onClick={() => window.open(url)}>
      <img src={image} alt="exchange-card__image" className="exchange__image" />
      <h3 className="exchange-card__title">{title}</h3>
      <p className="exchange-card__year">{year}</p>
    </div>
  );
};

export default ExchangeCard;
