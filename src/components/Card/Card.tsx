import React from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  imageUrl: string;
  title: string;
  price: number;
  id: number;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  price,
  id,
  className,
}) => (
  <div className="col-4">
    <div className={`card ${className ? className : ""}`}>
      <img src={imageUrl} className="card-img-top img-fluid" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{price} rub.</p>
        <Link to={`/products/${id}`} className="btn btn-outline-primary">
          Order
        </Link>
      </div>
    </div>
  </div>
);

export default Card;
