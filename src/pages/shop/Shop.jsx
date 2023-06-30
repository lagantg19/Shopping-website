import React from 'react';
import { PRODUCTS } from '../../Products';
import Product from './Product';

const Shop = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px', justifyContent: 'center' }}>
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            <Product {...product} />
          </div>

        ))}
      </div>
     
    </div>
  );
};

export default Shop;
