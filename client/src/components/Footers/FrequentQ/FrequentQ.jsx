import React from 'react';
import './FrequentQ.css'

function FrequentQ (){
return(
    <div className="preguntas-frecuentes">
    <h2 class="text-center mt-5 titulos-color">FREQUENT QUESTIONS</h2>
    <div className="pregunta">
      <h3>What are the turnaround times?</h3>
      <p>
      Delivery times depend on the place of shipment and the type of shipment selected. Orders usually take 3-7 days business days to arrive after payment has been confirmed.
      </p>
    </div>
    <div className="pregunta">
      <h3>What do I do if I don't like what I bought?</h3>
      <p>
      If you are not satisfied with your purchase, you can return it within a period of 15 days after receiving it. For more information on the process of returns, please see our returns section.
      </p>
    </div>
    <div className="pregunta">
      <h3>¿What payment methods do you accept?</h3>
      <p>
      We accept payments with credit and debit cards, transfers
         banking and cash payments through online payment platforms
         like MercadoPago.
      </p>
    </div>
    <div className="pregunta">
      <h3>How can I track my order?</h3>
      <p>
      When your order is shipped, we will send you an email with
         a tracking number and a link so you can follow up
         online. You can also track your order by starting
         login to your account on our website.
      </p>
    </div>
  </div>
);
};
export default FrequentQ