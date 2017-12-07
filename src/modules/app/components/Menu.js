import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <div className="app-menu">
    <div className="hero-foot">
      <div className="container">
        <nav className="tabs is-boxed">
          <ul>
            <li>
              <NavLink exact to="/delivery-form">
                Ajouter une livraison
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Menu;
