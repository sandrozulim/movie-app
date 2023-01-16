import React from "react";
import { Link } from "react-router-dom";
import "./ItemsList.scss";

function ItemsList({ items }) {
  const content = items.map((item) => {
    return (
      <li key={item.id} className="item-list__item">
        <Link className="item-list__link" to={`/${item.id}`}>
          <img
            className="item-list__poster"
            src={item.image}
            alt={item.title}
          />
          <h4 className="item-list__title">{item.title}</h4>
        </Link>
      </li>
    );
  });

  return <ul className="item-list">{content}</ul>;
}

export default ItemsList;
