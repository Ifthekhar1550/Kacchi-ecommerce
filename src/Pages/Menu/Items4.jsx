import itemImage1 from '../../assets/ChuiBeef/kacchi_bhai_chui_jhal_gosto_with_plain_rice_or_polao.jpeg'
import itemImage2 from '../../assets//ChuiBeef/kacchi_bhai_chui_jhal_gosto.jpeg'
import Image1 from '../../assets/Icons/OnePerson.png'
import Image2 from '../../assets/Icons/TwoPerson.png'
import Image3 from '../../assets/Icons/FivePerson.png'

const Items4 = () => {
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
               
                <dd className="font-extrabold text-center text-xl mt-3">চুইঝাল গোস্ত,
প্লেইন রাইস / পোলাও</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">২৩০/-</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                  <img src={Image2} alt="" className='w-[54px] h-[54px]'/>
                    </p>

                  <p className="font-semibold text-base text-center">৬৮০/-</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                  <img src={Image3} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">১১০০/-</p>
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
               
                <dd className="font-extrabold text-center text-xl mt-3">চুইঝাল গোস্ত</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">১৮০/-</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                  <img src={Image2} alt="" className='w-[54px] h-[54px]'/>
                    </p>

                  <p className="font-semibold text-base text-center">৫৩০/-</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                  <img src={Image3} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৮৫০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>

  </div>
  )
}

export default Items4