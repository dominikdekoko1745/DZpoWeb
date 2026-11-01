import React, { useState } from 'react';
import ItemForm from './components/AddForm';
import Item from './components/Item';
import './App.css';

function App() {
  // State для хранения списка покупок
  const [items, setItems] = useState([
    { id: 1, name: 'Молоко', price: 85 },
    { id: 2, name: 'Хлеб', price: 35 },
  ]);

  // Функция добавления товара
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Функция удаления товара по id
  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Вычисление общей стоимости покупок
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-container">
      <h1>Список покупок</h1>

      {/* Форма для добавления */}
      <ItemForm onAdd={handleAddItem} />

      {/* Список товаров */}
      {items.length === 0 ? (
        <p className="empty-text">Список пуст</p>
      ) : (
        <ul className="items-list">
          {items.map((item) => (
            <Item key={item.id} item={item} onDelete={handleDeleteItem} />
          ))}
        </ul>
      )}

      {/* Общая стоимость */}
      <div className="total-container">
        <h3>Общая стоимость: <span>{totalPrice} сом</span></h3>
      </div>
    </div>
  );
}

export default App;