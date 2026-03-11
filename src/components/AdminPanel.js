import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminPanel({ products, addProduct, deleteProduct }) {
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
            
            {/* ✅ FIX: Yahan ab sirf Delete button hai .float-right ke sath */}
            <button className="float-right" onClick={() => deleteProduct(product.id)}>Delete</button>
            <Link to={`/products/${product.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;