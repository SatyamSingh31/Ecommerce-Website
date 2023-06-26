import React from 'react'
import Card from '../Card/Card';
import './List.scss'

const List = () => {
    const data=[
        {
            id:1,
            img:"https://www.jiomart.com/images/product/original/rvj2rhimou/leotude-cotton-blend-half-sleeve-oversized-t-shirts-for-women-s-product-images-rvj2rhimou-0-202301101342.jpg",
        
            img2:"https://www.myntra.com/tshirts/roadster/the-roadster-lifestyle-co-women-rose-solid-round-neck-pure-cotton-t-shirt/13594612/buy?gclid=CjwKCAjwzuqgBhAcEiwAdj5dRjMyO0CGHZVs2GdGdDCE62BakKtMlXVTlAQ_ztstNL5JIIJ10lkdKxoCj6wQAvD_BwE",
            title:"Long Sleeve Graphic T-shirts",
            isNew:true,
            oldPrice:19,
            price:12,
        }, 
        {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEO5Svr0bIoNF3SDSHwbgBNngdWcLPFWVaJM7JF2sT7XRios6cclEgowY1RnQgr7O6lZFQdYnK0XWhlRxt1PNT5npZ5Rcw8LsUgwIRm8jAs0cnKNk6an1y&usqp=CAc",
            title:"Coat",
            isNew:true,
            oldPrice:19,
            price:12,
        }, 
         {
            id:3,
            img:"https://images.unsplash.com/photo-1621086894855-a6e46e5da68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBzaG9ydCUyMHNraXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            title:"Skirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },   
        {
            id:4,
            img:"https://images.unsplash.com/photo-1598904328978-8d9d8dba6453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBpbiUyMGhhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,

        },   
        {
            id:5,
            img:"https://images.unsplash.com/photo-1621086894855-a6e46e5da68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBzaG9ydCUyMHNraXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            title:"Skirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },   
        {
            id:6,
            img:"https://images.unsplash.com/photo-1598904328978-8d9d8dba6453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBpbiUyMGhhdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price:12,
        },   
        {
            id:7,
            img:"https://images.unsplash.com/photo-1621086894855-a6e46e5da68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBzaG9ydCUyMHNraXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            title:"Skirt",
            isNew:true,
            oldPrice:19,
            price:12,
        },   
        
        
    ];
        
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List