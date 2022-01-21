import img from '../../assets/images/pinceau.png';

import './CommunityMessage.css';

const CommunityMessage = ({ name, nf, content, suggestion }) => {
  return (
    <div className="community-message-container">
      <div className="message-icon">
        <p>{nf}</p>
      </div>
      <div className="message-content">
        <h3>{name}</h3>
        <p>
          {content}
        </p>
        <div className="message-products-suggestion">
          <h4>Suggestion de Produits :</h4>
          <div className="message-product-suggested">
            <div className="message-product-img">
              <img src={img} />
            </div>
            <h5>{suggestion}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityMessage;
