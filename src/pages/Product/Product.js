import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0)
    

    const images=[
        "https://i.pinimg.com/736x/26/be/1d/26be1d925dcd42e0af97785ba3c5eb7b.jpg",
        "https://as2.ftcdn.net/v2/jpg/01/66/70/47/1000_F_166704753_3NzlmF62tmv73bRKLlrhvqnMTIQd6590.jpg",

    ];
  return (
    <div className='product'>
        <div className="left">
            <div className="images">
                <img src={images[0]}alt="" onClick={()=>setSelectedImg(0)} />
                <img src={images[1]}alt=""onClick={()=>setSelectedImg(1)} />
            </div>
            <div className="mainImg">
                <img src={images[selectedImg]} alt="" />
            </div>

        </div>
        <div className="right">
            <h1>Title</h1>
            <span className='price'>$199</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis itaque alias. Incidunt fugiat rem magni dolorum natus, minima voluptatibus sunt voluptatem, a facere vitae eaque repellat molestias earum velit eos nulla laudantium quam!</p>
            <div className="quantity">
                <button onClick={()=>setQuantity(quantity===1?1:quantity-1)}>-</button>
                  {quantity}
                <button onClick={()=>setQuantity(quantity+1)}>+</button>
            </div>
            <button className="add">
            <AddShoppingCartIcon/>ADD TO CART

            </button>
<div className="links">
            <div className="item">
                <FavoriteBorderIcon/>ADD TO WISHLIST
             </div>
             <div className="item">
             <BalanceIcon/>ADD TO COMPARE
             </div>
             </div>
             <div className="info">
        <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <div className='info'>

        <hr/>
        </div>

        
        
        <div className="info">
        <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
        </div>
        </div>
       
    </div>
  )
}

export default Product