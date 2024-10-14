import React from "react";
import "../styles/contacts.css";
import { Header } from "./header";

export const Contact = () => {
  return (
    <div className="contact_wrapper">
      <Header />
      <h3>Customer Care</h3>
      <div className="contact">
        <textarea rows="8" placeholder="Leave a message..." />
        <button>Send Mail</button>
      </div>
    </div>
  );
};
