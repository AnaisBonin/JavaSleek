import './CommunityMessage.css';

const CommunityMessage = () => {
  return (
  <div className="community-message-container">
    <div className="message-icon">
      <p>AB</p>
    </div>
    <div className="message-content">
      <h3>Anaïs</h3>
      <p>Blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla blabla </p>
      <div className="message-products-suggestion">
        <h4>Suggestion de Produits :</h4>
        <div className="message-product-suggested">
          <div className="message-product-img">
            <p>image</p>
          </div>
          <h5>Product name</h5>
        </div>
      </div>
    </div>
  </div>
    )
};

export default CommunityMessage;
