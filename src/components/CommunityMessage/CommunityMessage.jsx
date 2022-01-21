import './CommunityMessage.css';

const CommunityMessage = () => {
  return (
  <div className="community-message-container">
    <div className="message-icon">
      <p>AB</p>
    </div>
    <div className="message-content">
      <h3>Anaïs</h3>
      <p>Content</p>
      <h4>Suggestion de Produits :</h4>
      <div className="message-products-suggestion">
        <div className="message-product-suggested">
          <div className="message-product-img">
            <p>image</p>
          </div>
          <h4>Product name</h4>
        </div>
      </div>
    </div>
  </div>
    )
};

export default CommunityMessage;
