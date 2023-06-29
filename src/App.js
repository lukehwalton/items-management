import './App.css';
import React, { useState } from 'react';
import './bootstrap.css'
import makeItems from './components/makeItems.js'

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', price: '', imageUrl: '' });
  const [items, setItems] = useState(makeItems());

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

        <div className="col">
          <h2>Items</h2>
          <div className='framed items'>
            <ul>
              {items.map((item) => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                {item.name} - ${item.price}
              </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col details-col">
          <h2>Item Details</h2>
          <div className='framed details'>
            {selectedItem ? (
              <div>
                
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

        <div className="col">
          <h2>Add New Item</h2>
          <div className='framed add'>
            {showForm ? (
              <form onSubmit={handleFormSubmit}>
                

                <div className='row form-row'>
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

                <div className='row form-row'>
                  <div className='col label-col'>
                    <label htmlFor="price">Price:</label>
                  </div>
                  <div className='col input-col'>
                    <input
                      type="text"
                      id="price"
                      value={newItem.price}
                      onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    />
                  </div>
                </div>

                <div className='row form-row'>
                  <div className='col label-col'>
                    <label htmlFor="imageUrl">Image URL:</label>
                  </div>
                  <div className='col input-col'>
                    <input
                      type="text"
                      id="imageUrl"
                      value={newItem.imageUrl}
                      onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className='wide-button'>Add</button>
              </form>
            ) : (
              <div>Click 'Add New Item' to add a new item</div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
