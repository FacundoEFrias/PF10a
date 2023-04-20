import React from "react";

function PrivacyPolicies() {
  const handleClick = () => {
    window.location.href = `mailto:snowpandaco@gmail.com?subject=Consulta&body=Mi%20consulta%20es%20:`;
  };
  return (
    <div className="preguntas-frecuentes">
      <h3 className="text-center mt-5 titulos-color">PRIVACY POLICIES</h3>
      <div className="pregunta">
        <h3>Information we collect</h3>
        <p>
          We collect information that you provide directly to us, such as your
          name, email address, payment information, shipping information, and
          any other information you provide when making a purchase or
          registering on our website.
        </p>
      </div>
      <div className="pregunta">
        <h3>How we use your information</h3>
        <p>
          We use the information we collect to process your purchases,
          communicate with you about your orders, and provide you with
          information about our products and promotions.
        </p>
      </div>
      <div className="pregunta">
        <h3>How we share your information</h3>
        <p>
          We do not sell or rent your information to third parties. We share
          your information only with service providers who need access to it to
          provide services to you on our behalf, such as processing payments and
          shipping packages.
        </p>
      </div>
      <div className="pregunta">
        <h3>How we protect your information</h3>
        <p>
          We take reasonable security measures to protect your information from
          unauthorized access or disclosure. We use SSL encryption technology to
          protect payment information.
        </p>
      </div>
      <div className="pregunta">
        <h3>Changes to our privacy policies</h3>
        <p>
          We may update our privacy policies from time to time. We will notify
          you of any material changes to our privacy policies by sending you an
          email at the address you provided us or by posting a notice on our
          website.
        </p>
      </div>
      <div className="pregunta">
        <h3>Contact</h3>
        <p>
          If you have any questions or concerns about our privacy policies,
          please contact us via email snowpandaco@gmail.com
        </p>
        <button className="botonGeneral" onClick={handleClick}>
          Send mail{" "}
        </button>
      </div>
    </div>
  );
}
export default PrivacyPolicies;
