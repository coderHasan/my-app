 
 import React from 'react'
 
 const FooterCard = ({title, subTitle, image}) => {

   return (

    <div className='flex gap-5'>
        
          <img 
            loading={"lazy"} 
            src={image}  
            className='w-10 h-10 object-contain'
            alt="" 
          />

          <div>
              <h5 className='text-lg font-bold'>{title}</h5>
              <p className='text-sm'>{subTitle}</p>
          </div>

    </div>

   )

 }
 
 export default FooterCard