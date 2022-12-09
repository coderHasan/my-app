
import React from 'react'
import FooterCard from '../component/FooterCard'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import Button from '../component/shared/Button';

const Footer = () => {

  return (

    <footer className='bg-white  border-t'>

      <div className='container'>
        {/* footer icons */}
          <div className='flex flex-wrap space-y-4 py-5 pb-10 pt-8 border-b justify-between items-center'>

              <FooterCard 
                image="/icons/f-1.png"
                title="Free Shipping"
                subTitle="For all orders over $200"
              />
              <FooterCard 
                image="/icons/f-2.png"
                title="1 & 1 Returns"
                subTitle="Cancellation after 1 day"
              />
              <FooterCard 
                image="/icons/f-3.png"
                title="100% Secure Payment"
                subTitle="Gurantee secure payments"
              />
              <FooterCard 
                image="/icons/f-4.png"
                title="24/7 Dedicated Support"
                subTitle="Anywhere & anytime"
              />
              <FooterCard 
                image="/icons/f-5.png"
                title="Daily Offers"
                subTitle="Discount up to 70% OFF"
              />
             

          </div>

        {/* footer widgets */}
        <div className='my-10 flex flex-wrap gap-10 '>
          {/* Contucts */}
          <div className='max-w-xs'>

              <h2 className='text-xl mb-5 font-bold'>Farmart - Your Online Foods & Grocery</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque.</p>

              <div className='mt-10 space-y-2'>
                  <span className='flex'>
                    <FiPhoneCall className='text-color mt-[5px]'/>
                    <div className='ml-4'>
                      <p>Hotline 24/7:</p>
                      <h2 className='text-2xl font-bold '>(+880) 1608403736</h2>
                    </div>
                  </span>

                  <span className='flex !mt-5'>
                    <AiOutlineHome className='text-color mt-[5px]'/>
                    <address className='ml-4 text-color not-italic'>Badda, Dhaka 1212, Bangladesh</address>
                  </span>

                  <span className='flex'>
                    <AiOutlineMail className='text-color mt-[5px]'/>
                    <p className='ml-4'>coderskhasan@gmail.com</p>
                  </span>

              </div>
          </div>
          {/* Links */}

          <div className=''>
              <h2 className='text-lg mb-6 font-bold'>Useful Links</h2>
              <ul className='space-y-5'>

                  <FooterLinks
                      href='/'
                      text='About us'
                  />
                  <FooterLinks
                      href='/'
                      text='Contuct'
                  />
                  <FooterLinks
                      href='/'
                      text='Help Center'
                  />
                  <FooterLinks
                      href='/'
                      text='Career'
                  />
                  <FooterLinks
                      href='/'
                      text='Sitemap'
                  />

              </ul>
          </div>
          {/* Links */}
          <div className=''>
              <h2 className='text-lg mb-6 font-bold'>Help Center</h2>
              <ul className='space-y-5'>

                  <FooterLinks
                      href='/'
                      text='Payments'
                  />
                  <FooterLinks
                      href='/'
                      text='Shipping'
                  />
                  <FooterLinks
                      href='/'
                      text='Product Returns'
                  />
                  <FooterLinks
                      href='/'
                      text='FAQ'
                  />
                  <FooterLinks
                      href='/'
                      text='Checkout'
                  />

              </ul>
          </div>

          {/* Links */}
          <div className=''>
              <h2 className='text-lg mb-6 font-bold'>Farmart Busines</h2>
              <ul className='space-y-5'>

                  <FooterLinks
                      href='/'
                      text='Sell On Farmart'
                  />
                  <FooterLinks
                      href='/'
                      text='Affiliate Program'
                  />
                  <FooterLinks
                      href='/'
                      text='Our Suppliers'
                  />
                  <FooterLinks
                      href='/'
                      text='Accessibility'
                  />
                  <FooterLinks
                      href='/'
                      text='Advertise With Us'
                  />

              </ul>
          </div>

          {/* Newsletter */}
          <div className=' lg:max-w-xs'>
          <h2 className='text-lg mb-6 font-bold'>Farmart Newsletter</h2>
              <p className='text-sm'>Register now to get updates on promotions and coupns. Don't worry! We not spam</p>

              <div className='flex items-center mt-5'>
                <div className='flex  flex-1 items-cneter border p-3 rounded'>
                    <AiOutlineMail className='text-color mt-[5px]'/>
                  <input
                    type="text" placeholder="Your email..."
                    className='bg-transparent  outline-none px-4'
                  />
                </div>
                <Button
                    title='Subscribe'
                    className='self-stretch'
                />
              </div>

          </div>

        </div>
        {/* Copyrigh */}
        <div className='py-10 flex flex-wrap space-y-3 items-center justify-center md:justify-between border-t'>
          <p>&copy; {new Date().getFullYear()}<a href="https://jsdev-mehedi.netlify.app/" className='underline text-text_color font-bold'> Mehedi Hasan</a> No Rights Reserved 😊. Build for fun.</p>
          <img src="/images/payment.png" alt="" />
        </div>

      </div>
      
    </footer>

  )

  }

  const FooterLinks = ({href ='#', text}) => (

      <li>
      <Link className='text-sm text-color' href={href}>
          {text}
      </Link>
      </li>

  )

export default Footer