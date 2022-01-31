import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title='The Lean Startup How Constant Innovation Creates Radically Successful Business Paperback'
                        price={29.99}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                        rating={4}
                    />
                    <Product
                        id="2"
                        title='2020 Apple MacBook Air (M1 chip with 8-core CPU and 7-core GPU, 8GB RAM, 256GB SSD) - Space Grey'
                        price={899}
                        image="https://images-eu.ssl-images-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title='All new Echo Show 8 (Black)'
                        price={99}
                        image="https://m.media-amazon.com/images/I/51C+FWhW9xL._SL1000_.jpg"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title='Swiss Military Laptop Backpack'
                        price={30}
                        image="https://m.media-amazon.com/images/I/71loqsZSccL._UL1440_.jpg"
                        rating={3}
                    />
                    <Product
                        id="5"
                        title='Insulated Stainless Steel Hot & Cold Flask Bottle (Black, 500ml)'
                        price={5}
                        image="https://m.media-amazon.com/images/I/51T4rXlmK4L._SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title='Sony WH-CH710N Noise Cancelling Wireless Headphones : Bluetooth Over The Ear Headset with Mic for Phone-Call, 35 Hours Battery Life, Quick Charge and Google Assitant - Black'
                        price={95}
                        image="https://m.media-amazon.com/images/I/61N6Ai7RkJL._SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
