
import React from 'react'
import { setBackground } from '../../utils/helper'

const HomeHero = () => {

    return (
        <section
            className='py-10'
            style={
                setBackground('/sec_bg/slide-bg.jpg')
            }
        >
            <div className='container'>
                <div className='flex gap-8 flex-wrap'>
                    {/* Hero Left Benner */}
                    <div className='flex-1 md:py-14 rounded-lg md:px-12 py-10 px-6' style={setBackground('/sec_bg/slider-1.jpg')}>
                        <div className='flex flex-col justify-between h-full'>

                            <div>
                                <h2 className='!leading-[45px] md:text-4xl sm:text-2xl text-xl font-bold text-text_color'>Active Summer With <br /> Juice Milk 300ml</h2>
                                <p className=' text-text_color md:mt-7 mt-4'>New arrivals with naturre fruits, juice <br />milks, essential for summer</p>
                            </div>
                            <a href='/' className='btn-white md:mt-14 mt-10'>Shop Now</a>
                        </div>
                    </div>
                    {/* Hero right Benner */}
                    <div className='md:w-1/3 w-full md:py-14 rounded-lg md:px-12 py-10 px-6' style={setBackground('/sec_bg/banner-1.jpg',{backgroundPosition: 'bottom right', backgroundColor: '#f4bb4a', backgroundSize: 'unset'})}>

                        <div className='flex flex-col justify-between h-full'>

                            <div>
                                <h2 className='md:text-4xl sm:text-2xl text-xl font-bold text-text_color'>20% SALE OFF</h2>
                                <p className=' text-text_color font-semibold md:mt-7 mt-4 text-xl'>Synthetic seeds <br />Net 2.0 OZ</p>
                            </div>
                            <a href='/' className='btn-white md:mt-14 mt-10'>Shop Now</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero