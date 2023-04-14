import React from "react";
import './PagosRetiros.css'

function PagosRetiros() {
    return (
        <div className="preguntas-frecuentes">
        <h2 class="text-center mt-5  freq-title">Payments and Withdrawals</h2>
            <div className="pregunta">
                <h3 className="payment-title">Credit or debit card</h3>
                <p className="payment-text">We accept credit and debit card payments through
             MercadoPago, a secure and reliable online payment platform.
             You can pay with any credit or debit card issued in
             Argentina.</p>
            </div>
            <div className="pregunta">
                <h3 className="payment-title">Wire transfer</h3>
                <p className="payment-text">We also accept payments by bank transfer. To do one
             transfer, please contact us through our email
             email and we will provide you with our account details
             banking.</p>
            </div>
            <div className="pregunta">
                <h3 className="payment-title">Payments in cash</h3>
                <p className="payment-text">If you prefer to pay in cash, you can do so through
             MercadoPago using a payment coupon at any payment point
             adhered, such as Easy Payment, Rapipago, Express Collection, among others.
             Once we have received your payment, we will ship your order.</p>
            </div>
            <div className="pregunta">
                <h3 className="payment-title">withdrawals</h3>
                <p className="payment-text"> Currently, withdrawals are made by mail. Please contact us through our email and we will provide you with the necessary details to make the withdrawal.</p>
            </div>
        </div>
    );
}
export default PagosRetiros