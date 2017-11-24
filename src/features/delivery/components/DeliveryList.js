import React from "react";

const DeliveryList = ({ deliveries }) => {
  console.log(deliveries);
  return (
    <div className="section">
      <table className="table">
        <thead>
          <tr>
            <th>crée le</th>
            <th>adresse de récupération</th>
            <th>adresse de livraison</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(item => (
            <tr key={item.id}>
              <td>{item.createdAt}</td>
              <td>{item.pickupaddress}</td>
              <td>{item.dropaddress}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryList;