import React, { useEffect, useState } from 'react';
import './BookingSummary.css';
import {Tooltip } from 'antd';
import Modal from '../Modal/Modal'
import ContainerDetailsModal from '../Modal/ContainerDetailsModal';
import TextArea from 'antd/es/input/TextArea';

const BookingSummary = () => {

  const requirementDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, labore facere nisi a placeat impedit aliquam unde. Ab fugiat consequuntur aperiam error? Veritatis dolor aliquid nihil perspiciatis cumque sed nulla quidem quisquam iure sit quibusdam mollitia quis, deleniti eius tempore asperiores fugiat nam key at omnis hic. Libero ipsum officiis exercitationem atque quidem asperiores voluptatum accusantium impedit. Dignissimos saepe mollitia earum, numquam, id doloremque velit obcaecati rem molestias praesentium, aspernatur nostrum temporibus dolor neque! Deserunt aspernatur, architecto recusandae id consequatur cumque enim numquam aliquam hic beatae natus autem placeat dignissimos blanditiis modi harum debitis consectetur perferendis similique, perspiciatis laborum. Inventore."

  const totalWeight = "500000000010 KG"
  const totalVolume = "1023.45698 CBM"
  const totalValue = "$ 100000000000"
  const packageType = "$ 100000000000"
  const NoofUnits = "$ 100000000000"
  const CargoType = "General Cargo"
  const Commodityname = "-"
  const Hscode = "-"
  const NoofContainers = "$ 100000000000"
  const PartiesShipper = "ABC Enterprices the value of aim at create an automatedgi"
  const PartiesConsignee = "ABC Enterprices the value of aim at create an automatedgi"
  const PartiesNotify = "ABC Enterprices the value of aim at create an automatedgi"
  const PartiesBilling = "ABC Enterprices the value of aim at create an automatedgi"
  const containerLists =[
              {
                key:1,
                container:"TRHU3324147 / 20 GP"
              },
              {
                key:2,
                container:"TRHU3324147 / 21 GP"
              },
              {
                key:3,
                container:"TRHU3324147 / 22 GP"
              },
              {
                key:4,
                container:"TRHU3324147 / 23 GP"
              },
              {
                key:5,
                container:"TRHU3324147 / 24 GP"
              },
              {
                key:6,
                container:"TRHU3324147 / 26 GP"
              },
              {
                key:7,
                container:"TRHU3324147 / 27 GP"
              },
              {
                key:8,
                container:"TRHU3324147 / 28 GP"
              },
              {
                key:9,
                container:"TRHU3324147 / 29 GP"
              },
              {
                key:10,
                container:"TRHU3324147 / 30 GP"
              },
              {
                key:11,
                container:"TRHU3324147 / 31 GP"
              },
              {
                key:12,
                container:"TRHU3324147 / 32 GP"
              },
              {
                key:13,
                container:"TRHU3324147 / 33 GP"
              },
             
  ]
  

  const MinContainer = containerLists.filter((item)=>item.key<=4)
  console.log(MinContainer)
  const MoreContainer = containerLists.filter((item)=>item.key>4)
  console.log(MoreContainer)

   //container_details_modal
   const [openContmodal,setOpenContmodal] = useState(false)
   const handleContOpen =()=>{
       setOpenContmodal(true)
   }
   const handleContClose =()=>{
       setOpenContmodal(false)
   }


   //This is for decrease count logic of text area
   const [textCount,setTextCount] = useState(1000)
   const [textInput,setTextInput] = useState("")
   useEffect(()=>{
       const length = Math.abs(textInput.length - 1000)
       setTextCount(length)
   },[textInput])

  return (
    <div className='container-fluid booking_summary'>
      <div className='row mx-0'>
        <div className='col-6 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Cargo Details</p>
            </div>
            <div className='card-body'>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Total Weight</p>
                  <p className='row_head2'>{totalWeight.length<=12?totalWeight:
                  <Tooltip placement="topLeft" title={totalWeight} >
                    <span role='button'>
                      {totalWeight.slice(0, 13).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Total Volume</p>
                  <p className='row_head2'>{totalVolume.length<=12?totalVolume:
                  <Tooltip placement="topLeft" title={totalVolume} >
                    <span role='button'>
                      {totalVolume.slice(0, 13).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Value</p>
                  <p className='row_head2'>{totalValue.length<=12?totalValue:
                  <Tooltip placement="topLeft" title={totalValue} >
                    <span role='button'>
                      {totalValue.slice(0, 13).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
              </div>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Package Type</p>
                  <p className='row_head2'>{packageType.length<=15?packageType:
                  <Tooltip placement="topLeft" title={packageType} >
                    <span role='button'>
                      {packageType.slice(0, 16).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>No of Units</p>
                  <p className='row_head2'>{NoofUnits.length<=12?NoofUnits:
                  <Tooltip placement="topLeft" title={NoofUnits} >
                    <span role='button'>
                      {NoofUnits.slice(0, 13).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Stackable Cargo</p>
                  <p className='row_head2'>Yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Shipment Details</p>
            </div>
            <div className='card-body'>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Cargo Type</p>
                  <p className='row_head2'>{CargoType.length<=15?CargoType:
                  <Tooltip placement="topLeft" title={CargoType} >
                    <span role='button'>
                      {CargoType.slice(0, 16).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Commodity Name</p>
                  <p className='row_head2'>{Commodityname.length<=15?Commodityname:
                  <Tooltip placement="topLeft" title={Commodityname} >
                    <span role='button'>
                      {Commodityname.slice(0, 16).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>Cargo Ready Date</p>
                  <p className='row_head2'>20 May, 2023</p>
                </div>
              </div>
              <div className='row  mx-0'>
                <div className='col'>
                  <p className='row_head'>Hs Code</p>
                  <p className='row_head2'>{Hscode.length<=12?Hscode:
                  <Tooltip placement="topLeft" title={Hscode} >
                    <span role='button'>
                      {Hscode.slice(0, 13).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'>
                  <p className='row_head'>No of Containers</p>
                  <p className='row_head2'>{NoofContainers.length<=40?NoofContainers:
                  <Tooltip placement="topLeft" title={NoofContainers} >
                    <span role='button'>
                      {NoofContainers.slice(0, 41).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
                </div>
                <div className='col'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3  mx-0 Parties_row'>
        <div className='col-6 mb-3'>
          <div className='card h-100'>
            <div className='card-header'>
              <p className='Header'>Parties</p>
            </div>
            <div className='card-body card_body'>
              <div className='d-flex'>
                <p className='parties_head'>Shipper</p>
                <p className='parties_enterprise' style={{ marginLeft: '87px' }}>{PartiesShipper.length<=56?PartiesShipper:
                  <Tooltip placement="topLeft" title={PartiesShipper} >
                    <span role='button'>
                      {PartiesShipper.slice(0, 57).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
              </div>
              <div className='d-flex'>
                <p className='parties_head'>Consignee</p>
                <p className='parties_enterprise' style={{ marginLeft: '68px' }}>{PartiesConsignee.length<=56?PartiesConsignee:
                  <Tooltip placement="topLeft" title={PartiesConsignee} >
                    <span role='button'>
                      {PartiesConsignee.slice(0, 57).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
              </div>
              <div className='d-flex'>
                <p className='parties_head'>Notify</p>
                <p className='parties_enterprise' style={{ marginLeft: '97px' }}>{PartiesNotify.length<=56?PartiesNotify:
                  <Tooltip placement="topLeft" title={PartiesNotify} >
                    <span role='button'>
                      {PartiesNotify.slice(0, 57).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
              </div>
              <div className='d-flex'>
                <p className='parties_head'>Billing</p>
                <p className='parties_enterprise' style={{ marginLeft: '97px' }}>{PartiesBilling.length<=56?PartiesBilling:
                  <Tooltip placement="topLeft" title={PartiesBilling} >
                    <span role='button'>
                      {PartiesBilling.slice(0, 57).trim().split("").join("") + "..."}
                    </span>
                  </Tooltip>}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-6 mb-3'>
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
              {
                        containerLists.length <=4 ? 
                          <>
                            {containerLists.map((item)=>{
                              return <p className='container_para'>{item}</p>
                            })}
                          </>
                            :<>
                              {MinContainer.map((item)=><p className='container_extrapara'>{item.container}</p>)}
                              <span role='button' style={{color:"#00c4ff"}} className='container_extrapara' onClick={()=>handleContOpen()}>Show more...</span>
                            </>
                            
                  
              }
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
              {/* {  
                  <p className='container_para'>{requirementDescription}</p>
              } */}

              <div className="requirement_section" style={{padding:"0px 13px"}}>
                <div className="textarea_description d-flex justify-content-between" >
                    <p className="" style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E",marginBottom:"5px"}}>Tell us more about your requirements</p>
                    <p className='m-0' style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E"}}>{textCount}/1000</p>
                </div>
                <TextArea placeholder='Type here...' rows={4} maxLength={1000} onChange={(e)=>setTextInput(e.target.value)} />
              </div>
              

            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openContmodal} width={"703px"}>
              <ContainerDetailsModal children={containerLists} handleContClose={handleContClose}  />
      </Modal>
    </div>
  );
};

export default BookingSummary;