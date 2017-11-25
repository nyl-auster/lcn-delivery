import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const DeliveryList = ({ deliveries }) => {
  if (!deliveries) {
    return <div className="section">Aucune livraison n'a été trouvée.</div>;
  }
  return (
    <div className="section">
      <table className="table">
        <thead>
          <tr>
            <th>Récupération à</th>
            <th>Livraison avant</th>
            <th>adresse de récupération</th>
            <th>adresse de livraison</th>
            <th>Détails</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(item => (
            <tr key={item.id}>
              <td>{moment(item.pickupDateTime).format("DD/M/Y à hh:mm")}</td>
              <td>{moment(item.dropDateTime).format("DD/M/Y à hh:mm")}</td>
              <td>{item.pickupAddress}</td>
              <td>{item.dropAddress}</td>
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
