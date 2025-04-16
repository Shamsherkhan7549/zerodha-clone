/** @format */

import React from "react";

const Charges = () => {
  return (
    <div className='container p-5'>
      <div className='row px-4'>
        <table class='table table-striped'>
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <button className='btn bg-success rounded  text-white  btn-sm'>
                  Free
                </button>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <button className='btn bg-success rounded  text-white  btn-sm'>
                  Free
                </button>
              </td>
            </tr>

            <tr>
              <td>NRI account (offline only)</td>
              <td>₹500</td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='row px-4 py-5'>
        <table class='table table-striped'>
          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frquency</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tickertape</td>

              <td> Monthly / Annual</td>
              <td> Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>

              <td>Per transaction</td>

              <td> Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td> Monthly</td>
              <td>Connect: 2000 | Historical: 2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charges;
