import React from "react";

function ShowChargesModal({FindNRate}) {
  return (
    <>
      <div className="charges">
        <div className="table-responsive">
          <table class="table">
            <tbody>
              <tr className="header">
                <td className="origincharge">Origin Charges</td>
                <td className="one">$100</td>
              </tr>
              <tr>
                <td className="pickupcharge ps-4">Pickup Charges</td>
                <td className="price-value">$55</td>
              </tr>
              <tr>
                <td className="pickupcharge ps-4">B/L Issuance</td>
                <td className="price-value">$45</td>
              </tr>
              <tr className="header">
                <td className="origincharge">International Freight Charges</td>
                <td className="one">$80</td>
              </tr>
              <tr className="header">
                <td className="origincharge">Destination Charges</td>
                <td className="one">$120</td>
              </tr>
              <tr>
                <td className="pickupcharge ps-4">Handling Charges</td>
                <td className="price-value">$60</td>
              </tr>
              <tr>
                <td className="pickupcharge ps-4">Import Custom Clearance</td>
                <td className="price-value">$30</td>
              </tr>
              <tr>
                <td className="pickupcharge ps-4">Delivery Charges</td>
                <td className="price-value">$30</td>
              </tr>
              <tr className="total">
                <th className="totaoriginchargelamount">Total amount :</th>
                <th className="one">$300 (USD)</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShowChargesModal;
