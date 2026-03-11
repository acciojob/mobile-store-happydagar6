import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminPanel({ products, addProduct, deleteProduct, editProduct }) {
  const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({ name: '', price: '', description: '', image: '' });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      
      <form onSubmit={handleAdd}>
        <input className="form-control" type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        <input className="form-control" type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required />
        <input className="form-control" type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
        <input className="form-control" type="text" placeholder="Image URL" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} required />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            
            <button className="delete-btn float-right" onClick={() => deleteProduct(product.id)}>Delete</button>
            <button className="edit-btn float-right" onClick={() => {
              const newPrice = prompt("Enter new price:", product.price);
              if (newPrice) editProduct(product.id, parseInt(newPrice));
            }}>Edit Price</button>
            <Link to={`/products/${product.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;