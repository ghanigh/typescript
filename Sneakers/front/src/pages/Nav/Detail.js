import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const article = useSelector(state => state.sneakers.data.find(item => item.id === id));

  return (
    <div>
      <h2>Détails de l'article</h2>
      <p>Nom: {article.name}</p>
      <p>Prix: {article.price}</p>
      {/* Affiche les autres détails de l'article */}
    </div>
  );
}

export default Detail;
