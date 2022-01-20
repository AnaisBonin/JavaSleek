import { useEffect, useState } from 'react';

import basket from '../../assets/icons/basket-white-icon.png';
import { useApp } from '../../contexts/AppProvider';

import './ShoppingCart.css';

const ShoppingCart = ({ product }) => {
  const { cart, setCart } = useApp();
  const [quantityInCart, setQuantityInCart] = useState(0);

  useEffect(() => {
    setQuantityInCart(() => {
      const productInCart = cart.find((article) => article.id === product.id);
      if (productInCart) return productInCart.quantity;
      return 0;
    });
  }, [cart]);

  const handlePlus = () => {
    if (quantityInCart === 0) {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else {
      setCart(
        cart.map((article) => (product.id === article.id
          ? { ...article, quantity: article.quantity + 1 }
          : article)),
      );
    }
  };

  useEffect(() => {
    setCart(
      cart.map((article) => (product.id === article.id
        ? { ...article, totalPrice: article.quantity * article.pricePack }
        : article)),
    );
  }, [quantityInCart]);

  const handleMinus = () => {
    if (quantityInCart === 1) {
      setCart(cart.filter((article) => product.id !== article.id));
    } else {
      setCart(
        cart.map(
          (article) => (product.id === article.id
            ? {
              ...article,
              quantity: article.quantity - 1,
            }
            : article),
        ),
      );
    }
  };

  return (
    <div className="basket-container">
      {quantityInCart === 0 ? (
        <button type="button" className="basket-empty" onClick={handlePlus}>
          <img src={basket} alt="Icon of a shopping basket" />
        </button>
      ) : (
        <div className="basket-filled">
          <button type="button" onClick={handleMinus}>
            <p>-</p>
          </button>
          <p>{quantityInCart}</p>
          <button type="button" onClick={handlePlus}>
            <p>+</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
