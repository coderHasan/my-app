
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../component/search'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const Header = () => {
  return (
    <header className='bg-white py-7 border-b'>
      <div className='container'>
        {/* Header top area */}
        <div className='flex justify-between items-center'>
          {/* Logo */}
    
            <Link href='/' className=''> 
              <Image
                src='/farmet/logo.svg'
                width='160'
                height='160'
                objectFit='contain'
                />
              </Link>
            
          {/* Search */}
            <Search />
          {/* Contuct */}
            <div className='lg:flex flex-col hidden'>
                <span className='text-[20px] font-bold'>8 800 332 65-66</span>
                <p className='self-end text-color text-base'>Support 24/7</p>
            </div>
          
          {/* Card */}
          <div className='flex items-center'>

            <Link href='/my-account'>
                <AiOutlineUser className='text-3xl text-black'/>
            </Link>

            <Link href='/cart' className='flex items-center gap-4'>
                <div className='relative'>
                     <AiOutlineShoppingCart className='text-3xl text-black'/>
                    <span className='bg-primary text-center absolute rounded px-2 text-sm -right-3 -top-2'>0</span>
                </div>
                <div className='hidden lg:block'>
                    <span className='text-color text-sm'>Your cart</span>
                    <p className="text-lg font-bold">$0.00</p>
                </div>
            </Link>

          </div>

        </div>
      </div>
    </header>
  )
}

export default Header




