import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://imagescdn.aeo.in/img/app/brands/ae/jeans/women/Skinny_11-12-2019.jpg?auto=format" alt="" />
                <button>
                    <Link className='link' to="/products/1">
                        New Season
                    </Link>
                </button>
            </div>
            <div className="row">
                <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/22116622/2023/2/25/69511773-27b9-4462-8740-a801daa1de9b1677304982087Co-Ords1.jpg" alt="" />
                <button>
                    <Link className='link' to="/products/1">
                        Women
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://i.pinimg.com/originals/75/f6/2a/75f62a21c6bbfa437985f5782e5290d9.jpg" alt="" />
                <button>
                    <Link className='link' to="/products/1">
                        Men
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://assets.ajio.com/medias/sys_master/root/20220623/g3gy/62b3819faeb26921af423d20/-473Wx593H-464531848-navy-MODEL.jpg" alt="" />
                        <button>
                    <Link className='link' to="/products/1">
                        Tshirt
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxRFtRHlWV3P7NolUVrd3_NakTxUkWU602pgaI_8VUH6ziEdI5l-KHf4sMTqL6dfRdOobh6td0o1gm2gy3kzNZcYT1ArKM8-3VOM_MKDY" alt="" />
                        <button>
                    <Link className='link' to="/products/1">
                        Traditionals
                    </Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shopsy-shoe/w/8/9/8-21212-nobelite-black-original-imagj5wbvszbetnz.jpeg?q=70" alt="" />
                <button>
                    <Link className='link' to="/products/1">
                    Shoes
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories