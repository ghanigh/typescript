import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // Pour générer des identifiants uniques

const AddArticle = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      id: uuidv4(),
      name,
      price
      // Ajout d'autres champs d'article si nécessaire
    };
    dispatch({ type: 'ADD_ARTICLE', payload: newArticle });
    setName('');
    setPrice('');
  }

  return (
    <div>
      <h2>Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom de l'article" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} />
        {/* Ajout d'autres champs de formulaire pour les autres détails de l'article */}
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddArticle;
