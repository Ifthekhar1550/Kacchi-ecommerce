import itemImage1 from '../../assets/Others/kacchi_bhai_plain_polao.jpeg'
import itemImage2 from '../../assets/Others/kacchi_bhai_chicken_roast.jpeg'
import itemImage3 from '../../assets/Others/kacchi_bhai_gorur_rezala.jpeg'
import itemImage4 from '../../assets/Others/kacchi_bhai_jali_kabab.jpeg'
import itemImage5 from '../../assets/Others/KachiChatni.jpeg'

import Image1 from '../../assets/Icons/OnePerson.png'

const Items6 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-md bg-white">
          <img
            alt=""
            src={itemImage1}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">প্লেইন পোলাও</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">১২০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-md bg-white">
          <img
            alt=""
            src={itemImage2}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">মুরগীর রোস্ট</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">১৫০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-md bg-white">
          <img
            alt=""
            src={itemImage3}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">গরুর রেজালা</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">২০০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-md bg-white">
          <img
            alt=""
            src={itemImage4}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">জালি কাবাব</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৬০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-md bg-white">
          <img
            alt=""
            src={itemImage5}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">চাটনি</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">২০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>



  </div>
  )
}

export default Items6