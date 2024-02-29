
import itemImage1 from '../../assets/Polaw/polawChicken.jpeg'
import itemImage2 from '../../assets/Polaw/polawBeef.jpeg'
import Image1 from '../../assets/Icons/OnePerson.png'
import Image2 from '../../assets/Icons/TwoPerson.png'
import Image3 from '../../assets/Icons/FivePerson.png'
const Items3 = () => {
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
                 
                  <dd className="font-extrabold text-center text-xl mt-3">প্লেইন পোলাও,মুরগীর রোষ্ট,বোরহানী</dd>

                </div>
             
              <div className="mt-6 flex items-center justify-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                      <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                    </p>

                    <p className="font-semibold text-base">২৯০/-</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                    <img src={Image2} alt="" className='w-[54px] h-[54px]'/>
                      </p>

                    <p className="font-semibold text-base">৮৫০/-</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                    <img src={Image3} alt="" className='w-[54px] h-[54px]'/>
                    </p>

                    <p className="font-semibold text-base">১৪০০/-</p>
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
                 
                  <dd className="font-extrabold text-center text-xl mt-3">প্লেইন পোলাও, গরুর রেজালা, বোরহানী</dd>

                </div>
             
              <div className="mt-6 flex items-center justify-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">


                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                      <img src={Image1} alt="" className='w-[54px] h-[54px]'/>
                    </p>

                    <p className="font-semibold text-base">৩৩০/-</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                    <img src={Image2} alt="" className='w-[54px] h-[54px]'/>
                      </p>

                    <p className="font-semibold text-base">৯৭০/-</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">
                    <img src={Image3} alt="" className='w-[54px] h-[54px]'/>
                    </p>

                    <p className="font-semibold text-base">১৬০০/-</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

    </div>
  )
}

export default Items3
