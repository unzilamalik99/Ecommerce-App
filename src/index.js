import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ShopProvider from "./Contexts/ShopContext";
import SidebarProvider from "./Contexts/SidebarContext";
import CartProvider from "./Contexts/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <CartProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </CartProvider>
    </SidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
