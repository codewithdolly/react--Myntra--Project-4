import React from 'react'
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import TextField from '@mui/material/TextField';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Image1 from "../Images/return.png";
import Image2 from "../Images/devivery.png";
import Image3 from "../Images/contact.png";

function SingleProductPage4() {
    return (
        <>
            <div style={{display:"flex", paddingTop:"2rem"}}>
            <h3>DELIVERY OPTIONS</h3><span> <DriveEtaIcon /></span>
            </div>
            <TextField id="outlined-basic" label="Enter a Pin Code" variant="outlined" /><br />
            <small>Please enter PIN code to check delivery time & Pay on Delivery Availability.</small>

            <div style={{lineHeight:"25px", paddingTop:"20px", display:"flex", marginLeft:"2rem", marginBottom:"2rem", margintop:"2rem"}}>
                <div >
                <img src={Image1} alt="" width="70px"/>
                <p>Easy 7 days returns <br /> and exchanges</p>
                </div>
                <div style={{marginRight:"2rem", marginLeft:"2rem"}}>
                <img src={Image2} alt=""  width="70px"/>
                <p>Myntra Delivered</p>
                </div>
                <div>
                <img src={Image3} alt=""  width="70px"/>
                <p>No-Contact Delivery</p>
                </div>
            </div>
            <hr />
            <div style={{display:"flex", paddingTop:"2rem"}}>
            <h3>PRODUCT DETAILS </h3><span> <AssignmentIcon /></span>
            </div>
            <h3 style={{color:"green"}}>In stock.</h3>
            <h4>Sold by <a href="/" style={{color:"green", fontWeight:"500"}}>YOYO Fashion India Pvt Ltd </a> and Delivered by Amazon.</h4>
            <ul  style={{paddingLeft:"2rem", paddingTop:"1rem"}}>
                <li>Care Instructions: Dry Clean Only</li>
                <li>Fit Type: Regular</li>
                <li>Lehenga Fabric : Net || Blouse Fabric : Net || Duptta Fabric : Net|| Inner Fabric : satin</li>
                <li>Lehenga Color : Pink || Blouse Color : Pink || Duptta Color : Pink|| Inner Color : Pink</li>
                <li>Lehenga Flare : 3.4(MTR) || Lehenga Length : 42(Inch) ||Lehenga Waist Size : Up to 42(Inch) || Blouse Length : 0.8(MTR) || Duptta Length : 2.2(MTR) || Other Attachment : Blouse Inner Attach and size is 0.5(MTR)</li>
                <li>Lehenga Work : Embroidered || Blouse Work : Embroidered || Duptta Work : Embroidered & Sequence Work|| Stitched Type : Lehenga Full Stitched and Zip Attach</li>
                <li>Wash Care: Dry clean for the first wash, there after hand wash</li>
            </ul>
            <div style={{paddingTop:"1.5rem", color:"#ff3e6c"}}>See More</div>
            <br /><hr /><br />
        </>
    )
}

export default SingleProductPage4
