import './App.css';
import React, { useState } from 'react';
import './bootstrap.css'

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '', imageUrl: '' });
  const [items, setItems] = useState([
    { id: 1, name: 'Lamp', price: '10', imageUrl: 'http://www.comparestoreprices.co.uk/images/te/tesco-ceramic-tapered-lamp.jpg' },
    { id: 2, name: 'Table', price: '20', imageUrl: 'http://www.comparestoreprices.co.uk/images/at/atom-pedestal-side-table-clear.jpg' },
    { id: 3, name: 'Lava Lamp', price: '30', imageUrl: 'https://i.pinimg.com/736x/40/98/19/40981946f13b8bd41b5705ea9b56c7d0--lava-lamps-dorm.jpg' },
  ]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleAddItemClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItemWithId = { ...newItem, id: items.length + 1 };
    setItems([...items, newItemWithId]);
    setNewItem({ name: '', price: '', imageUrl: '' });
    setShowForm(false);
  };

  return (
    <>
    <h1 className='heading'>Items Management</h1>
    <div className="container text-left">
      <div className="row">
        <div className="col framed">
          <h2>Items</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item)}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>

        <div className="col">
          <div className='framed details'>
            {selectedItem ? (
              <div>
                <h2>Item Details</h2>
                <img src={selectedItem.imageUrl} alt={selectedItem.name} />
                <h3>{selectedItem.name}</h3>
                <p>${selectedItem.price}</p>
              </div>
            ) : (
              <div>No item selected</div>
            )}
          </div>
          <button onClick={handleAddItemClick} className='wide-button'>Add New Item</button>
        </div>

        <div className="col framed">
          {showForm ? (
            <form onSubmit={handleFormSubmit}>
              <h2>Add New Item</h2>
              <div className='row name-row'>
                <div className='col label-col'>
                  <label htmlFor="name">Name:</label>
                </div>
                <div className='col input-col'>
                  <input
                    type="text"
                    id="name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  />
                </div>
              </div>

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              />

              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                value={newItem.imageUrl}
                onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
              />

              <button type="submit" className='wide-button'>Add</button>
            </form>
          ) : (
            <div>Click 'Add New Item' to add a new item</div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
