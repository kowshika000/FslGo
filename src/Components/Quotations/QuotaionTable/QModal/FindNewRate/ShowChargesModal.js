import React from "react";

function ShowChargesModal({ FindNRate,checkedItems }) {
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
              {FindNRate?.origin_charge > 0 && checkedItems?.originCharges && (
                <tr className="header">
                  <td className="origincharge">ORIGIN CHARGES</td>
                  <td className="one">{FindNRate?.origin_charge}</td>
                </tr>
              )}
              {FindNRate?.origin_charge > 0 && checkedItems?.originCharges && origin?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))}
              {FindNRate?.cargopickup_charge > 0 && checkedItems?.cargoPickup && (
                <tr className="header">
                  <td className="origincharge">PICKUP CHARGES</td>
                  <td className="one">{FindNRate?.cargopickup_charge}</td>
                </tr>
              )}
              {/* {origin?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))} */}
              {FindNRate?.freight_charge > 0 && checkedItems?.internationalFreight && (
                <tr className="header">
                  <td className="origincharge">
                    INTERNATIONAL FREIGHT CHARGES
                  </td>
                  <td className="one">{FindNRate?.freight_charge}</td>
                </tr>
              )}
              {FindNRate?.freight_charge > 0 && checkedItems?.internationalFreight && freight?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))}
              {FindNRate?.destination_charge > 0 && checkedItems?.DestinationCharges && (
                <tr className="header">
                  <td className="origincharge">DESTINATION CHARGES</td>
                  <td className="one">{FindNRate?.destination_charge}</td>
                </tr>
              )}
              {FindNRate?.destination_charge > 0 && checkedItems?.DestinationCharges && dest?.map((item, index) => (
                <tr key={index}>
                  <td className="pickupcharge ps-4">{item?.text}</td>
                  <td className="price-value">{item?.value}</td>
                </tr>
              ))}
              {FindNRate?.cargodelivery_charge > 0 && checkedItems?.CargoDelivery && (
                <tr className="header">
                  <td className="origincharge">PICKUP CHARGES</td>
                  <td className="one">{FindNRate?.cargodelivery_charge}</td>
                </tr>
              )}
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
                <th className="totaoriginchargelamount">TOTAL AMOUNT :</th>
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
