
import React from 'react'

const OfferCard = ({ img, category, title }) => {
    return (
        <div className="!min-w-[350px] flex flex-col items-start cursor-pointer">
            <img className='rounded-lg' src={`/images/Future_brande/homepage-new-brand-img-${img}.webp`} alt="" />
            <h4 className="text-color text-lg font-semibold leading-6 mt-4">{category}</h4>
            <span className="text-text_color text-xl font-bold">{title}</span>
        </div>
    )
}

export default OfferCard