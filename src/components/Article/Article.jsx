import ShoppingCart from '../ShoppingCart/ShoppingCart';
import img from '../../assets/images/pinceau.png'

import './Article.css';

const Article = ({ product }) => {
  return (
    <div className='article-container'>
      <button className='article-img' type="button">
        <img src={img} />
      </button>
      <div className='article-quantity'>
        <p>1</p>
      </div>
      <div className="article-name">
        <p>Nom du produit</p>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default Article;
