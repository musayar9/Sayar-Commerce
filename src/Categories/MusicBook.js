import React from 'react'

function MusicBook() {
  return (
    <div>
    <button className='peer text-white lg:text-gray-700 font-semibold lg:font-normal text-center  text-md   lg:text-sm'  >Kitap & Müzik & Film</button>
    <div className='hidden peer-hover:flex hover:flex absolute'>
      <div className= 'p-2 md:p-3 lg:p-4 z-20 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 border border-gray-400  lg:border-none mt-2 lg:mt-6 cursor-pointer w-80 md:w-97 lg:w-72  text-center mr-5'>
          <div className='p-1 lg:p-2 space-x-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2'>
              <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                  <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Enstrümanlar</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Gitarlar</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Bateriler</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Çalgılar</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Nefesli Çalgılar</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Vurmalı Çalgılar</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Amfi</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Müzik Ekipmanları</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Piyano</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Akordiyonlar</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Spor Çorap</li>
              </ul>
              <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                  <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Kitaplar</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Edabiyat Kitapları</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Fantastik & Bilim Kurgu</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Yardımcı Ders Kitapları</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>TYT-AYT</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'> KPSS-ALES-DGS</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>YDS-YABANCI DİL</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kişisek Gelişim</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Sağlık</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Ekonomi ve Pazarlama </li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Çizgi Roman</li>
                
          
              </ul>

      
              
        
           
      

          <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                  <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Müzik(Medya)</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Albümler</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Aksesuar Hediyelik</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Poster</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Plak</li>
                
          
              </ul>
         
              <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                  <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Film</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Yerli Film</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Belgesel</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Animasyon</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Eğitim/Sağlık</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Spor/Yoga</li>
                  <li className='hover:text-violet-700 duration-500'>Müzikal Filmler</li>
             
          
              </ul>
           
          </div>
      </div>
    </div>

  </div>
  )
}

export default MusicBook
