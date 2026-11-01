import React, { useState } from 'react';

function ItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !price) return;

    // Передаем новый объект товара наверхs
    onAdd({
      id: Date.now(), // уникальный id на основе времени
      name: name.trim(),
      price: Number(price),
    });

    // Очищаем форму
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <input
        type="text"
        placeholder="Название товара"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Добавить товар</button>
    </form>
  );
}

export default ItemForm;