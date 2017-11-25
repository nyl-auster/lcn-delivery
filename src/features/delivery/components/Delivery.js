import React from "react";

const Delivery = props => {
  const { delivery } = props.data;
  return (
    <div>
      <h1 className="title is-3">#commande {delivery.id}</h1>
      <div>Créee le : {delivery.createdAt}</div>
      <div>Mise à jour le : {delivery.updatedAt}</div>
      <div>Adresse de collecte : {delivery.pickupAddress}</div>
      <div>Adresse de livraison : {delivery.dropAddress}</div>
      <div>Téléphone de la personne livrée : {delivery.dropAddressPhone}</div>
      <div>Remarques importantes : {delivery.dropAddressNote}</div>
    </div>
  );
};

export default Delivery;
