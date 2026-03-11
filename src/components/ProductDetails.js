import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div>
      {/* Cypress test needs .btn class on the back button */}
      <button className="btn" onClick={() => navigate('/')}>Back</button>
      
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetails;