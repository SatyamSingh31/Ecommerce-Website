import React, { useState } from 'react'
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './Slider.scss'
const Slider = () => {

    const [currentSlide, setcurrentSlide] = useState(0)

    const data = [
      "https://wallpaperaccess.com/full/1437917.jpg",
      "https://c.wallhere.com/photos/d9/37/women_brunette_white_tops_short_shorts_brown_eyes_street_city_pale-32382.jpg!d",
      "https://www.instyle.com/thmb/NOWjAbEyRnw-3XzGN-YD21VQmMs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/OfficeOutfitIdeas2023-lead-e16b64a6b1684d79b97b10079cd3feb3.jpg",
      ];

      const prevSlide=()=>{
        setcurrentSlide(currentSlide===0 ?2:currentSlide-1)
      }
      const nextSlide=()=>{
        setcurrentSlide(currentSlide===2 ?0:currentSlide+1)
      }
  return (
    <div className="slider">
        <div className="container" style={{transform:"translateX(-" + currentSlide*100 + "vw)"}}> 
        {/* yha template literal v use kr skte the */}
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
<WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
<EastOutlinedIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider