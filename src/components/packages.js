import React, { useEffect } from "react";
import "../styles/packages.css";
import { Header } from "./header";

export const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="packages_wrapper">
      <Header />
      <h3>Service Packages</h3>
      <div className="packages">
        <div className="elite_package">
          <div>
            <h4>Elite Package</h4>
            <i>Status Marketing.</i>
            <i>Get 150 KSH per view.</i>
          </div>

          <button>Buy 1,000.00 KES</button>
        </div>

        <div className="prestige_package">
          <div>
            <h4>Prestige Package</h4>
            <i>Status Marketing.</i>
            <i>Get 150 KSH per view.</i>
            <i>Account Support.</i>
          </div>

          <button>Buy 2,000.00 KES</button>
        </div>

        <div className="delux_package">
          <div>
            <h4>Delux Package</h4>
            <i>Status Marketing.</i>
            <i>Get 150 KSH per view.</i>
            <i>Account Support.</i>
            <i>Fast Pay</i>
          </div>

          <button>Buy 3,500.00 KES</button>
        </div>

        <div className="grand_package">
          <div>
            <h4>Grand Package</h4>
            <i>Status Marketing.</i>
            <i>Get 150 KSH per view.</i>
            <i>Account Support.</i>
            <i>Fast Pay</i>
            <i>Agents Access.</i>
          </div>

          <button>Buy 5,500.00 KES</button>
        </div>
      </div>
    </div>
  );
};
