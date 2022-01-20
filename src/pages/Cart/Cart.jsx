import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useApp } from '../../contexts/AppProvider';
import ProductPage from '../../pages/ProductPage/ProductPage';

import './Cart.css';

const Cart = () => {
  const { cart: cartArray, total } = useApp();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(() => {
      const array = cartArray.map((article) => article.totalPrice);
      const reducer = (a, b) => a + b;

      if (cartArray.length > 0) {
        return array.reduce(reducer);
      }
      return 0;
    });
  }, [cartArray]);

  return (
    <>
      <main className="cart-container">
        {total === 0 && (
          <div className="cart-empty">
            <p>Vous n&lsquo;avez aucun article dans votre panier</p>
            <Link to="/categories">
              <button type="button" className="cart-empty-button">
                Continuez votre sélection
              </button>
            </Link>
          </div>
        )}
        {total > 0 && (
          <>
            <div className="cart-list">
              {cartArray.map((article, i) => (
                <ProductPage product={article} key={i} />
              ))}
            </div>
            <div className="cart-information">
              <p>
                {total}
                &nbsp;produits dans votre panier
              </p>
              <p className="cart-information-example">
                (1 produit = 1 article conditionné / 1 lot
              </p>
              <div className="cart-amount">
                <div className="cart-amount-information">
                  <h4>Total Panier</h4>
                  <p>
                    {totalPrice}
                    &nbsp;€
                  </p>
                </div>
                <div>
                  <button type="button" className="cart-validation">
                    Valider mon panier
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Cart;
