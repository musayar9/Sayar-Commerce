import React from 'react'

function SuperMarket() {
  return (
    <div>
    <button className='peer text-gray-700 text-center text-sm'  >SuperMarket</button>
    <div className='hidden peer-hover:flex hover:flex absolute'>
      <div className='p-4 z-20 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mt-6 cursor-pointer w-85 text-center'>
          <div className='p-2 space-x-2 flex justify-around'>
              <ul className='space-y-1 text-gray-700 text-sm font-[500] mt-2' >
                  <h6 className='text-sm font-500 text-gray-300 underline'>Kişisel Bakım</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Saç Bakımı</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Ağda & Epilasyon</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Vücut Bakımı</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Cilt Bakımı</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Banyo & Duş</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Saç Bakımı</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Mutfak</li>
          
              </ul>

              <ul className='space-y-1 text-gray-700 text-sm font-[500] mt-2' >
                  <h6 className='text-sm font-500 text-gray-300 underline'>Gıda</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Özel Gıda</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kahvaltılık</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kahve </li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'> Kuru Gıda</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Çay</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Atıştırmalık</li>
             
              
          
              </ul>
              
              <ul className='space-y-1 text-gray-700 text-sm font-[500] mt-2' >
                  <h6 className='text-sm font-500 text-gray-300 underline'>Ev & Temizlik</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Çamaşır Yıkama</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Bulaşık Yıkama</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Pappas</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kağı Ürünleri</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Deterjanlar</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Ev Temizli</li>
                  
          
              </ul>
       

          </div>

          <div className='p-6 space-x-8 flex justify-around'>
              <ul className='space-y-1 text-gray-700 text-sm font-[500] mt-2' >
                  <h6 className='text-sm font-500 text-gray-300 underline'>Sağlık & Spor</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Sporcu Besinleri</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Vitamin </li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Ek Kıda</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Cinsel Sağlık</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Hijyenik Ped</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Hasta Bezi</li>
            
          
              </ul>

              <ul className='space-y-1 text-gray-700 text-sm font-[500] mt-2' >
                  <h6 className='text-sm font-500 text-gray-300 underline'>PetShop</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kuş Ürünleri</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kedi Kumu</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Köpek Maması </li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Köpek Tasmaı</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Kedi Maması</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Akvaryum Ürünleri</li>
              
          
              </ul>
              
              <ul className='space-y-1 text-gray-700 text-sm font-[500] mt-2' >
                  <h6 className='text-sm font-500 text-gray-300 underline'>Bebek Bakım</h6>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Bebek Kozmetik</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Bebek Bezi</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Islak Mendil</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Bebek Havlu</li>
                  <li className='hover:text-violet-700 duration-500 hover:underline'>Bebek Ek Besin</li>
               
                  
          
              </ul>
         

          </div>
      </div>
    </div>

  </div>
  )
}

export default SuperMarket
