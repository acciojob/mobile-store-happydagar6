import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails({ products, editProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));
  
  // Naya price store karne ke liye state
  const [newPrice, setNewPrice] = useState(product ? product.price : '');

  if (!product) return <h2>Product Not Found</h2>;

  const handleSave = () => {
    editProduct(product.id, parseInt(newPrice));
  };

  return (
    <div>
      <button className="btn" onClick={() => navigate('/')}>Back</button>
      
      <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Current Price: ${product.price}</p>
      </div>

      <div>
        <input 
          className="form-control" 
          type="number" 
          value={newPrice} 
          onChange={(e) => setNewPrice(e.target.value)} 
        />
        <button className="float-right" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default ProductDetails;