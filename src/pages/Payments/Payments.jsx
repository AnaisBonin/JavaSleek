import React from 'react';
import triangle from '../../assets/icons/triangle.svg'
import './Payments.css';

const Alerts = () => {
  alert("Votre commande a été pris en compte")
} 

const Payments = () => {
  return <main>
      <p className='title'> Paiement de la commande </p>
        <div className="container1">
          <div className="mode-paiement">
            <span className="un">
              <p>1 </p>
            </span>
            <p> Total à payer (TTC) XXX€ </p>
          </div>
          <div className="commande">
            <p> Détails de la commande</p>
            <img src={triangle} alt="triangle" />
          </div>
          <div className="promo">
            <p> Entrer un code promo</p>
            <img src={triangle} alt="triangle" />
          </div>
        </div>
        <div className="container2">
           <div className="paiement">
           <span className="un">
              <p>2 </p>
           </span>
             <p> Mode de paiement</p>
           </div>
           <div>
            <input type="checkbox" id="bankcard"/>
              <label for="bankcard"> credit card</label>
           </div>
           <div>
            <input type="checkbox" id="payment"/>
              <label for="payment"> Oney Paiement en 3 fois carte bancaire</label>
           </div>
           <div>
            <input type="checkbox" id="paypal"/>
              <label for="paypal"> Paypal</label>
           </div>
           <div>
            <input type="checkbox" id="virement"/>
              <label for="virement"> virement</label>
           </div>
        </div>
        <div className="container3">
          <div className="livraison">
            <span className="un">
              <p>3 </p>
            </span>
            <p>Adresse de livraison</p>
              <img src={triangle} alt="triangle" />
          </div>
        </div>
        <div className="container4">
          <div className="facturation">
          <span className="un">
              <p>4 </p>
            </span>
            <p>Adresse de facturation</p>
              <img src={triangle} alt="triangle" />
          </div>
        </div>
        <button type="button" className="payment-boutton" onClick={Alerts}>PAIEMENT</button>        
  </main>;
};

export default Payments;
