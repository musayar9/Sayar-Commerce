/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { BsLinkedin,  BsFacebook, BsTwitter, BsYoutube, BsPinterest} from 'react-icons/bs'
import {RiInstagramFill, RiWhatsappFill} from 'react-icons/ri'
import {FiGlobe, FiPhoneCall} from 'react-icons/fi'


function Footer() {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 py-4 pl-4 sm:pt-10 sm:p-6'>
        <div className='grid gap-y-5 mx-auto container'>
        <div className='grid sm:grid-cols-2  lg:grid-cols-4 gap-y-4 gap-x-8'>
        <footer>
            <h2 className='text-md md:text-lg lg:text-xl text-violet-700 mb-3 '>Sayar</h2>
            <ul className='grid gap-y-1 text-gray-800 text-sm md:text-md lg:text-lg'>
                <li><a href="#" className='hover:underline'>Hakkımızda</a></li>
                <li><a href="#" className='hover:underline'>Vizyon & Misyon</a></li>
                <li><a href="#" className='hover:underline'>Yönetim</a></li>
                <li><a href="#" className='hover:underline'>Kariyer</a></li>
                <li><a href="#" className='hover:underline'>İs Ortaklarımız</a></li>
                <li><a href="#" className='hover:underline'>Sayar'da Satıcı Ol</a></li>
            </ul>
        </footer>



        <footer>
            <h2 className='text-md md:text-lg lg:text-xl text-violet-700 mb-3 '>Sayar Politikalar</h2>
            <ul className='grid gap-y-1 text-gray-800 text-sm md:text-md lg:text-lg'>
                <li><a href="#" className='hover:underline'>Kişisel Verilerin Korunması</a></li>
                <li><a href="#" className='hover:underline'>Güvenli Alışveriş</a></li>
                <li><a href="#" className='hover:underline'>Bilgi Güvenliği Politikası</a></li>
                <li><a href="#" className='hover:underline'>İş ve Çevre Poltikalarımız</a></li>
                <li><a href="#" className='hover:underline'>Bilgi Toplumu Hizmetleri</a></li>
                <li><a href="#" className='hover:underline'>Kullanım Koşulları</a></li>
                <li><a href="#" className='hover:underline'>Çerez Poltikası</a></li>
               
            </ul>

        </footer>


        <footer>
            <h2 className='text-md md:text-lg lg:text-xl text-violet-700 mb-3 '>Sayar İletişim</h2>
            <ul className='grid gap-y-2  text-gray-800 space-y-2'>
                <li className='mt-2 text-md md:text-lg lg:text-xl'><a href="#" className='hover:underline-none  transition-colors duration-500 text-gray-700 border border-gray-600 hover:border-white px-2 py-1 lg:px-4 lg:py-2 rounded-xl hover:text-white'>Müşteri Hizmetleri</a></li>
                <li className='ml-2 '>
                    <h2 className='flex space-x-2'><span className=' text-md md:text-lg lg:text-xl font-semibold'>Çağrı Merkezimiz</span> <FiPhoneCall className=' mt-2' size={18}/></h2>
                   <p className='font-bold text-md md:text-lg lg:text-xl mt-1 ml-3'>0850 452 25 00</p>
                    
            </li>
      
            <li className=' text-md md:text-lg lg:text-2xl'>
                    <p className='flex space-x-2 '><RiWhatsappFill className='text-green-700 ml-4 mt-1' size={30} /><span className=' font-semibold'>Whatsapp</span> </p>
                  
            </li>
            </ul>

        </footer>

        <footer>
                    <h3 className='text-md md:text-lg lg:text-xl  text-purple-700 mb-3'>
                        Sayar'ı indirin
                    </h3>

                    <ul className='grid gap-y-3 grid-cols-2 sm:grid-cols-1'>
                            <li>
                                <a href='#'>
                                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt=""/>
                                </a>
                            </li>
                            <li>
                            <a href="#">
									<img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt=""/>
								</a>
                            </li>
                            <li>

                            <a href="#">
									<img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt=""/>
								</a>
                            </li>
                    </ul>
                </footer>

      
        </div>


        <div className='h-[1px] bg-violet-700'></div>
            <div className='flex items-center justify-evenly items-center flex-col items-center gap-y-2 sm:gap-y-0 sm:flex-row pt-1 sm:pt-2'>

           
                <footer>
                    
                    <ul className='flex gap-x-4'>
                        <li className='transition-colors w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center rounded-xl  text-gray-800 hover:bg-white hover:text-blue-700'>
                            <a href="https://tr-tr.facebook.com/">
                                    <BsFacebook  size={24} />
                                    
                            </a>
                        </li>
                        <li  className='transition-colors w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center rounded-xl  text-gray-800 hover:bg-white hover:text-blue-700'>
                            <a href="https://www.linkedin.com/home" >
                                    <BsLinkedin  size={24} />
                            </a>
                        </li>
                        <li className='transition-colors w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center rounded-xl  text-gray-800 hover:text-blue-700'>
                            <a href="https://www.instagram.com/">
                                    <RiInstagramFill  size={24} />
                            </a>
                        </li>
                        <li className='transition-colors w-4 h-4 lg:w-6 lg:h-6 flex  items-center justify-center rounded-xl  text-gray-800 hover:text-blue-700'>
                            <a href="https://www.twitter.com/">
                                    <BsTwitter  size={24} />
                            </a>
                        </li>
                        <li className='transition-colors w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center rounded-xl  text-gray-800  hover:text-red-700'>
                            <a href="https://www.youtube.com/">
                                    <BsYoutube  size={24} />
                            </a>
                        </li  >
                        <li className='transition-colors w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center rounded-xl  text-gray-800  hover:text-red-700'>
                            <a href="https://www.youtube.com/">
                                    <BsPinterest  size={24} />
                            </a>
                        </li  >

                    </ul>
                </footer>

<div>  <p className='text-xs md:text-sm'>
                        <a href="www.sayar.com" className='text-violet-700 hover:underline font-bold'>Her şey bir tık uzağında</a>
                    </p></div>
            
                <div className=' flex gap-x-3 text-gray-800'>
               
                   <p className='text-xs md:text-sm lg:text-md  lg:mt-1'>&copy; Copyright 2019-2023 Sayar</p> 
                  

            
                 

                    <span className='transitions-colors h-5 md:h-6 lg:h-8 flex items-center gap-x-2 border border-gray-200  justify-center rounded-xl text-xs md:text-sm text-white px-3 hover:bg-purple-50 hover:text-purple-700 cursor-pointer'>
                        <FiGlobe size={16}/>
                        Türkçe (TR)
                    </span>
                </div>
         
            </div>
        </div>
      
    </div>
  )
}

export default Footer
