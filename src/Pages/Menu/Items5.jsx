
import itemImage1 from '../../assets/Desert&Drink/kacchi_bhai_badam_sharbat.jpeg'
import itemImage2 from '../../assets/Desert&Drink/kacchi_bhai_borhani.jpeg'
import itemImage3 from '../../assets/Desert&Drink/kacchi_bhai_firni.jpeg'
import itemImage4 from '../../assets/Desert&Drink/kacchi_bhai_sada_jorda.jpeg'
import itemImage5 from '../../assets/Desert&Drink/KachiYogurt.jpeg'
import Image1 from '../../assets/Icons/OnePerson.png'

const Items5 = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt=""
            src={itemImage1}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">বাদাম শরবত</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৯০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt=""
            src={itemImage2}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">বোরহানী</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৭০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt=""
            src={itemImage3}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">ফিরনি</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৭০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt=""
            src={itemImage4}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">জর্দা</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৭০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>
    <div className='flex flex-col'>
        <a href="#" className="flex-grow block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt=""
            src={itemImage5}
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
              <div>
               
                <dd className="font-extrabold text-center text-xl mt-3">দই</dd>

              </div>
           
            <div className="mt-6 flex items-center justify-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">
                    <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                  </p>

                  <p className="font-semibold text-base text-center">৭০/-</p>
                </div>
              </div>
            </div>
          </div>
        </a>
    </div>



  </div>
  )
}

export default Items5;