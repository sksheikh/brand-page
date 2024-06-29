import React from 'react'

export default function HeroSection() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>

            <div className='hero-btns'>
                <button type='button'>Shop Now</button>
                <button type='button' className='secondary-btn'>Shop Now</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="images">
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                    <img src="/images/amazon.png" alt="amazon-logo" />
                </div>
            </div>
        </div>
        <div className="hero-left">
            <img src="/images/shoe_image.png" alt="shoe-image" />
        </div>
      
    </div>
  )
}
