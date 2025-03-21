import React from 'react'
import './DescriptionBox.css' 

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (150)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that facilitates buying and selling of product or services over the internet.
                It serves as a virtual marketplace where business and individuals showcase their products, ineract with customers, and conduct
                transactions without the need for physical presence. E-commerce websites have gained immense popularity due to their conventional accessibility
                and the global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products or services and detailed descriptions, images, prices, and any available variety
                (e.g sizes, colors). Each product usually has its own description with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
