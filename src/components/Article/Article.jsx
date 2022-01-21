import ShoppingCart from '../ShoppingCart/ShoppingCart';
import img from '../../assets/images/pinceau.png'

import './Article.css';

const Article = ({ name, quantity }) => {
  return (
    <div className='article-container'>
      <button className='article-img' type="button">
        <img src={img} />
      </button>
      <div className='article-quantity'>
        <p>{quantity}</p>
      </div>
      <div className="article-name">
        <p>{name}</p>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default Article;
