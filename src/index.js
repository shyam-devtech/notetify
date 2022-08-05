import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './assets/css/bootstrap.min.css'
import './assets/css/header.css';
import './assets/css/general.css';
import './assets/css/animation.css';
import './assets/css/footer.css';
import './assets/css/home.css';
import './assets/css/inner-page.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/responsive.css';
import './assets/css/root-css.css';
import './assets/css/style.css';
import './assets/css/tabler-icons.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

