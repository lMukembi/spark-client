import React, { useEffect } from "react";
import "../styles/tokens.css";
import { Header } from "./header";

export const Tokens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tokens_wrapper">
      <Header />
      <h3>Account Tokens</h3>
      <div className="tokens">
        <div className="auth_token">
          <h4>Auth Token</h4>

          <div>Whatsapp Approval.</div>
          <div>Tripled Cashback Approval.</div>
          <div>Spinning Approval.</div>
          <div className="tokens_main">Unlock Token.</div>

          <button>Buy 4,000.00 KES</button>
        </div>

        <div className="access_keycard">
          <h4>Access Keycard</h4>

          <div>Whatsapp Approval.</div>
          <div>Tripled Cashback Approval.</div>
          <div>Spinning Approval.</div>
          <div className="tokens_main">Add Agent.</div>

          <button>Buy 6,500.00 KES</button>
        </div>

        <div className="gate_pass">
          <h4>Gate Pass</h4>

          <div>Whatsapp Approval.</div>
          <div>Tripled Cashback Approval.</div>
          <div>Spinning Approval.</div>
          <div className="tokens_main">Verification Token.</div>

          <button>Buy 8,500.00 KES</button>
        </div>

        <div className="credential_token">
          <h4>Credential Token</h4>

          <div>Whatsapp Approval.</div>
          <div>Tripled Cashback Approval.</div>
          <div>Spinning Approval.</div>
          <div className="tokens_main">Approved Token.</div>

          <button>Buy 10,000.00 KES</button>
        </div>

        <div className="entity_token">
          <h4>Entity Token</h4>

          <div>Whatsapp Approval.</div>
          <div>Tripled Cashback Approval.</div>
          <div>Spinning Approval.</div>
          <div className="tokens_main">Access Token.</div>

          <button>Buy 15,000.00 KES</button>
        </div>
      </div>
    </div>
  );
};
