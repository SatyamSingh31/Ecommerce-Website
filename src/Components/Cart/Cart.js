import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data=[
        {
            id:1,
            img:"https://www.jiomart.com/images/product/original/rvj2rhimou/leotude-cotton-blend-half-sleeve-oversized-t-shirts-for-women-s-product-images-rvj2rhimou-0-202301101342.jpg",
        
            img2:"https://www.myntra.com/tshirts/roadster/the-roadster-lifestyle-co-women-rose-solid-round-neck-pure-cotton-t-shirt/13594612/buy?gclid=CjwKCAjwzuqgBhAcEiwAdj5dRjMyO0CGHZVs2GdGdDCE62BakKtMlXVTlAQ_ztstNL5JIIJ10lkdKxoCj6wQAvD_BwE",
            title:"Long Sleeve Graphic T-shirts",
            desc:"TShirt",
            isNew:true,
            oldPrice:19,
            price:12,
        }, 
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEO5Svr0bIoNF3SDSHwbgBNngdWcLPFWVaJM7JF2sT7XRios6cclEgowY1RnQgr7O6lZFQdYnK0XWhlRxt1PNT5npZ5Rcw8LsUgwIRm8jAs0cnKNk6an1y&usqp=CAc",
            title:"Coat",
            desc:"coat",
            isNew:true,
            oldPrice:19,
            price:12,
        }, 
    ];
  return (
    
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">
                    ${item.price}
                </div>
            </div>
            <DeleteOutlineIcon className="del"/>
            </div>
        ))}
    <div className="total">
    <span>SUBTOTAL</span>
    <span>$123</span>

    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">RESET CART</span>

    </div>
  )
}

export default Cart