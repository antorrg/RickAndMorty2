import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
// import dotenv from 'dotenv'
// dotenv.config();
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientid=process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider  domain="dev-mg7v1nvcxu1guo4c.us.auth0.com"
    clientId="wQuXnnBzksOOkDbSwb6pItsmmSOreCe1"
    authorizationParams={{redirect_uri: window.location.origin
    }}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
