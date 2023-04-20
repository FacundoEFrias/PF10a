import React from "react";

import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="preguntas-frecuentes">
      <h3 className="text-center mt-5 titulos-color">TERMS AND CONDITIONS</h3>
      <div className="pregunta">
        <h3>Introduction</h3>
        <p>
          Welcome to SnowpandaCo! These Terms and Conditions govern the use of
          our company website and the services we offer. By accessing and using
          our website, you agree to comply with these Terms and Conditions and
          all applicable laws and regulations. If you do not agree to these
          Terms and Conditions, please do not use our website.
        </p>
      </div>
      <div className="pregunta">
        <h3>Use of the Website</h3>
        <p>
          The use of our website is intended for persons over the age of 18. By
          using our website, you warrant that you are at least 18 years of age.
          We reserve the right to restrict access to our website to anyone at
          any time for any reason.
        </p>
      </div>
      <div className="pregunta">
        <h3>Intellectual property</h3>
        <p>
          Intellectual Property All content on our website, including but not
          limited to text, graphics, logos, button icons, images, audio clips,
          digital downloads, data compilations, and software, is the property of
          our company or our content providers. and are protected by applicable
          intellectual property laws. You may not copy, reproduce, modify,
          distribute, transmit, publicly display, or otherwise use the contents
          of our website without our prior written consent.
        </p>
      </div>
      <div className="pregunta">
        <h3>User Responsibility</h3>
        <p>
          You are responsible for maintaining the confidentiality of your user
          account and any information related to it, including your password.
          You are responsible for all activities that occur under your user
          account. If you suspect that someone has gained unauthorized access to
          your user account, you must inform us immediately. You are not
          responsible for any loss or damage caused by unauthorized use of your
          user account, unless the loss or damage is due to your own negligence
          or breach of these Terms and Conditions.
        </p>
      </div>
      <div className="pregunta">
        <h3>Changes to the Terms and Conditions</h3>
        <p>
          Changes to Terms and Conditions We reserve the right to change these
          Terms and Conditions at any time without notice. The updated version
          of the Terms and Conditions will be posted on our website and will be
          effective immediately upon posting. Your continued use of our website
          following the posting of updated Terms and Conditions constitutes your
          acceptance of such changes.
        </p>
      </div>
      <div className="pregunta">
        <h3>Applicable Law</h3>
        <p>
          These Terms and Conditions shall be governed by and construed in
          accordance with the{" "}
          <a href="https://www.argentina.gob.ar/normativa/nacional/ley-24240-638">
            Consumer Defense Law, Ley 24.240
          </a>
        </p>
      </div>
    </div>
  );
}
export default Terms;
