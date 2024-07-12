import React from "react";

function ShowChargesModal({ FindNRate }) {
  const deliveryC = FindNRate?.delivery_charges;
  const origin = FindNRate?.origin_charges;
  const dest = FindNRate?.destination_charges;
  console.log(dest, "delll");

  const freight = FindNRate?.freight_charges;
  return (
    <>
      <div className="charges">
        <div className="table-responsive">
          <table class="table">
            <tbody>
              {FindNRate?.origin_charge > 0 && (
                <tr className="header">
                  <td className="origincharge">Origin Charges</td>
                  <td className="one">{FindNRate?.origin_charge}</td>
                </tr>
              )}
              {origin?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))}

              {/* <tr>
                <td className="pickupcharge ps-4">B/L Issuance</td>
                <td className="price-value">0</td>
              </tr> */}
              {FindNRate?.freight_charge > 0 && (
                <tr className="header">
                  <td className="origincharge">
                    International Freight Charges
                  </td>
                  <td className="one">{FindNRate?.freight_charge}</td>
                </tr>
              )}
              {freight?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))}
              {FindNRate?.destination_charge > 0 && (
                <tr className="header">
                  <td className="origincharge">Destination Charges</td>
                  <td className="one">{FindNRate?.destination_charge}</td>
                </tr>
              )}
              {dest?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))}
              {/* <tr>
                  <td className="pickupcharge ps-4">dd</td>
                  <td className="price-value">9</td>
                </tr>*/}

              {/* {deliveryC?.map((item, index) => (
                <tr key={index} className="header">
                  <td className="origincharge ">{item.text}</td>
                  <td className="one">
                    {item.value == "" ? 0 : item.value}
                  </td>
                </tr>
              ))} */}

              <tr className="total">
                <th className="totaoriginchargelamount">Total amount :</th>
                <th className="one">{FindNRate?.total_amount_in_usd}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShowChargesModal;
