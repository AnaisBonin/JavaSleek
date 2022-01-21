import ShoppingCart from '../ShoppingCart/ShoppingCart';

import './Article.css';

const Article = ({ product }) => {
  return (
    <div className='article-container'>
      <button className='article-img' type="button">
        <p>image</p>
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
