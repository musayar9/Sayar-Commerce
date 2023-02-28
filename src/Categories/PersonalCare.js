import React from 'react'

function PersonalCare() {
    return (
        <div>
            <button className='peer text-white lg:text-gray-700 font-semibold lg:font-normal text-center text-md lg:text-sm'  > Kişisel Bakım</button>
            <div className='hidden peer-hover:flex hover:flex absolute'>
                <div className='p-2 md:p-3 lg:p-4 z-20 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 border border-gray-400 lg:border-none mt-2  lg:mt-6 cursor-pointer w-80 md:w-97 lg:w-84  text-center'>
                    <div className='pl-1 lg:p-2 space-x-2 grid grid-cols-2 md:grid-cols-3'>
                        <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                            <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Cilt Bakım</h6>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Yüz Maskesi</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Yüz Kremi</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Yüz Temizleme</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Cilt Serumu</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Göz Bakımı</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>El & Ayak Bakımı</li>

                        </ul>

                        <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                            <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Saç Bakımı</h6>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Saç Şekilendirici</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Saç Boyası</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Şampuan </li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'> Saç Serumu</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Saç Maskesi</li>



                        </ul>

                        <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                            <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Makyaj</h6>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Fondöten</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Aseton & Oje</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Makyaj Seti </li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Ten Makyajı</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Göz & Dudak Makyajı</li>


                        </ul>


            
                        <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                            <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Tıraş & Epilasyon</h6>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Tüy Dökücü</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Ağda </li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Tıraş Bıcağı</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Epilatör</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Tıraş Köpüğü</li>
          


                        </ul>

                        <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                            <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Deodorant & Parfüm</h6>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Deodorant</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Roll-on</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Vücut Spreyi </li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Parfüm</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Parfüm Setleri</li>


                        </ul>

                        <ul className='space-y-1 text-gray-700 text-xs md:text-sm font-[500] mt-2' >
                            <h6 className='text-xs md:text-sm font-500 text-gray-300 underline'>Genel  Bakım</h6>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Bakım Yağları</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Duş Jeli ve Kremi</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Vücut Bakımı</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Hijyenik Ped</li>
                            <li className='hover:text-violet-700 duration-500 hover:underline'>Cinsel Sağlık</li>



                        </ul>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default PersonalCare
