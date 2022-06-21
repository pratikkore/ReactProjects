import React from 'react'
import { cartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = () => {

  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}

      </div>
    </div>
  );
};
