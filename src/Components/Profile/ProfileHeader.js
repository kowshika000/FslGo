import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Card, Upload } from 'antd'
import React, { useState } from 'react'
import uploadIcon from '../../assets/Upload.svg'
import './ProfileHeader.css'
import Edit_Image  from '../../assets/profile_Edit.svg'

const ProfileHeader = () => {

    //This is for ConvertBase64
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          console.log('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
         console.log('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };

    //This is for Upload Handle Change
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
      if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (url) => {
          setLoading(false);
          setImageUrl(url);
        });
      }
    }

    //This is for Upload Image
    const uploadButton = (
        <button
          style={{
            border: 0,
            background: 'none',
          }}
          type="button"
        >
          {loading ? <LoadingOutlined /> : <img src={uploadIcon}></img>}
          <div 
            style={{
                fontWeight:"400",
                fontSize:"12px",
                lineHeight:"18px",
                letterSpacing:".01em",
                color:"#29333D"
            }}
          >
            Upload Image
          </div>
        </button>
    );

  return (
    <Card
          style={{
            width: "100%",
          }}
          className='container mx-auto p-0 mob_response ship_section'
          id='mobile_margin'
        >
            <div className="row profile_details">
                <div className="col-2" style={{position:"relative"}}>
                    <Upload
                        name="avatar"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                width: '100%',
                                }}
                            />
                        ) : (
                        uploadButton
                        )}
                    </Upload>
                    <div className='horizontal_line' >

                    </div>
                </div>
                <div className="col-10 profile_box d-flex align-items-start">
                    <div className="profile_box_1"> 
                        <div className="name_field">
                            <p className='m-0'>Name</p>
                            <p className='m-0'>Jhon Doe</p>    
                        </div>
                        <div className="companyname_field">
                            <p className='m-0'>Company Name</p>
                            <p className='m-0'>Abc Enterprise</p>
                        </div>
                    </div>
                    <div className="profile_box_2">
                        <div className="email_field">
                            <p className='m-0'>Email</p>
                            <p className='m-0'>email@gmail.com</p>    
                        </div>
                        <div className="companyprofile_field">
                            <p className='m-0'>Company Profilee</p>
                            <p className='m-0'>Exporter</p>
                        </div>
                    </div>
                    <div className="profile_box_3">
                        <div className="workemail_field">
                            <p className='m-0'>Work Email</p>
                            <p className='m-0'>email@gmail.com</p>    
                        </div>
                        <div className="prefcurrency_field">
                            <p className='m-0'>CPreferred currency</p>
                            <p className='m-0'>USD</p>
                        </div>
                    </div>
                    <div className="profile_box_4">
                        <div className="phone_field">
                            <p className='m-0'>Phone</p>
                            <p className='m-0'>+91 98596826282</p>    
                        </div>
                    </div>
                    <div className="edit_icon_box">
                        <img src={Edit_Image} alt="" />
                    </div>
                </div>
                {/* <div className="col-1">
                        <img src={Edit_Image} alt="" />
                </div> */}
            </div>
        </Card>
  )
}

export default ProfileHeader