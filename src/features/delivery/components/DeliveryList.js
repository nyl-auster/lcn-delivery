import React from "react";
import { NavLink } from "react-router-dom";

const DeliveryList = ({ deliveries }) => {
  return (
    <div className="section">
      <table className="table">
        <thead>
          <tr>
            <th>crée le</th>
            <th>adresse de récupération</th>
            <th>adresse de livraison</th>
            <th>id</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(item => (
            <tr key={item.id}>
              <td>{item.createdAt}</td>
              <td>{item.pickupaddress}</td>
              <td>{item.dropaddress}</td>
              <td>{item.id}</td>
              <td>
                <NavLink to={"/deliveries/" + item.id}>
                  <span className="button is-info">Détail</span>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryList;
