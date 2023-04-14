import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import  store  from "./Redux/store/index.js";
import { Auth0Provider } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


const domain = "dev-rhanbz5vhvfradtc.us.auth0.com"
const clientId = "gIqgPaWv0HvyNOk8QsD4iTgClvhDLDaI"

/*const onRedirectCallback = (appState) => {
  // Redirigir al usuario a la URL deseada
  window.location.replace("http://localhost:3000/User");
};*/


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
   <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
      // redirect_uri: "https://pf-10a-bhm9.vercel.app/"
      redirect_uri: "http://localhost:3000/" //Usar en localHost
    }}
    //onRedirectCallback={onRedirectCallback}
  >
    <React.StrictMode>
          <App />
        </React.StrictMode>
        </Auth0Provider>
  </Provider>
)


reportWebVitals();
