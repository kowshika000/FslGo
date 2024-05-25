import React from 'react';
import './BookingSummary.css';
import { Link } from 'react-router-dom';

const BookingSummary = () => {

  const requirementDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, labore facere nisi a placeat impedit aliquam unde. Ab fugiat consequuntur aperiam error? Veritatis dolor aliquid nihil perspiciatis cumque sed nulla quidem quisquam iure sit quibusdam mollitia quis, deleniti eius tempore asperiores fugiat nam id at omnis hic. Libero ipsum officiis exercitationem atque quidem asperiores voluptatum accusantium impedit. Dignissimos saepe mollitia earum, numquam, id doloremque velit obcaecati rem molestias praesentium, aspernatur nostrum temporibus dolor neque! Deserunt aspernatur, architecto recusandae id consequatur cumque enim numquam aliquam hic beatae natus autem placeat dignissimos blanditiis modi harum debitis consectetur perferendis similique, perspiciatis laborum. Inventore."

  return (
    <div className='container-fluid booking_summary'>
      <div className='row mx-0'>
        <div className='col-lg-6 col-md-12 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Cargo Details</p>
            </div>
            <div className='card-body'>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Total Weight</p>
                  <p className='row_head2'>500 KG</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Total Volume</p>
                  <p className='row_head2'>207 CBM</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Value</p>
                  <p className='row_head2'>$ 1000</p>
                </div>
              </div>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Package Type</p>
                  <p className='row_head2'>-</p>
                </div>
                <div className='col'>
                  <p className='row_head'>No of Units</p>
                  <p className='row_head2'>1</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Stackable Cargo</p>
                  <p className='row_head2'>Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Shipment Details</p>
            </div>
            <div className='card-body'>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Cargo Type</p>
                  <p className='row_head2'>General Cargo</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Commodity Name</p>
                  <p className='row_head2'>-</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Cargo Ready Date</p>
                  <p className='row_head2'>20 May, 2023</p>
                </div>
              </div>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Hs Code</p>
                  <p className='row_head2'>-</p>
                </div>
                <div className='col'>
                  <p className='row_head'>No of Containers</p>
                  <p className='row_head2'>1 X 20 Gp</p>
                </div>
                <div className='col'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3  mx-0 Parties_row'>
        <div className='col-lg-6 col-md-12 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Parties</p>
            </div>
            <div className='card-body card_body'>
              <div className='d-flex'>
                <p className='parties_head'>Shipper</p>
                <p className='parties_enterprise' style={{ marginLeft: '87px' }}>(ABC Enterprise)</p>
              </div>
              <div className='d-flex'>
                <p className='parties_head'>Consignee</p>
                <p className='parties_enterprise' style={{ marginLeft: '68px' }}>(YYY Enterprise)</p>
              </div>
              <div className='d-flex'>
                <p className='parties_head'>Notify</p>
                <p className='parties_enterprise' style={{ marginLeft: '97px' }}>(YYY Enterprise)</p>
              </div>
              <div className='d-flex'>
                <p className='parties_head'>Billing</p>
                <p className='parties_enterprise' style={{ marginLeft: '97px' }}>(YYY Enterprise)</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Value Added Services</p>
            </div>
            <div className='card-body'>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Import Clearance</p>
                  <p className='row_head2'><u>Yes</u></p>
                </div>
                <div className='col'>
                  <p className='row_head'>Cargo Pickup</p>
                  <p className='row_head2'><u>Yes</u></p>
                </div>
                <div className='col'>
                  <p className='row_head'>Cargo Insurance</p>
                  <p className='row_head2'><u>No</u></p>
                </div>
              </div>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Export Clearance</p>
                  <p className='row_head2'><u>No</u></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3 mx-0'>
        <div className='col'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Container Details</p>
            </div>
            <div className='card-body' style={{ height: '160px' }}>
              <p className='container_para mt-3'>TRHU3324147 / 20 GP</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3 mx-0'>
        <div className='col'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Special Requirements</p>
            </div>
            <div className='card-body'>
              {
                requirementDescription
                //   <p className='container_para'>{requirementDescription.length>200&&requirementDescription.substring(0,200)}...
                //   <Link className=''>read more</Link></p>
                // :
                //   <p className='container_para'>{requirementDescription}
                //   <Link className='' onClick={()=>}>read less</Link></p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;