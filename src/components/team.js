import React, { useEffect } from "react";
import "../styles/team.css";
import { Header } from "./header";

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="team_wrapper">
      <Header />
      <h3>My Team</h3>
      <div className="team">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Phone</th>
              <th>Deposit</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>eric</td>
              <td>0712345678</td>
              <td>100.00 KES</td>
              <td>
                <button>Upgrade</button>
                <button>Delete</button>
                <button>Login</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>anders</td>
              <td>0792345678</td>
              <td>350.00 KES</td>
              <td>
                <button>Upgrade</button>
                <button>Delete</button>
                <button>Login</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>martin</td>
              <td>0742345673</td>
              <td>260.00 KES</td>
              <td>
                <button>Upgrade</button>
                <button>Delete</button>
                <button>Login</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>brian</td>
              <td>0732345675</td>
              <td>410.00 KES</td>
              <td>
                <button>Upgrade</button>
                <button>Delete</button>
                <button>Login</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
