
import banner from '../../assets/banner.png';
import Image1 from '../../assets/Delivery-Partner/Foodpanda.png';
import Image2 from '../../assets/Delivery-Partner/Foodi.png';
import Image3 from '../../assets/Delivery-Partner/Pathao.png';
import Slider from './Slider/Slider';
import Group from './Group/Group';
import Items from '../Menu/Items';
import BranchesPage from '../Branches/BranchesPage';

const HomePage = () => {
  return(
<>
  {/* // Banner section start */}
<section
  className="relative bg-cover  bg-center bg-no-repeat max-w-[1200px] mx-auto rounded-3xl"
  style={{ backgroundImage: `url(${banner})` }}
>

  <div
    className=" py-32  lg:flex lg:justify-center lg:h-[550px] lg:items-center lg:px-8 "
  >
    <div className="">
      <h1 className="text-4xl font-extrabold sm:text-6xl text-white text-center">
      ঐতিহ্যবাহী <span className='text-primary'>কাচ্চি</span> সেরা স্বাদে
      </h1>

      <div className="absolute mt-10 left-[83px] lg:mt-36 sm:left-14 flex flex-wrap gap-4">
        <a
          href="#Menu"
          className="block w-full  bg-primary px-8 py-3 font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto rounded-full text-sm lg:text-lg"
        >
          আমাদের স্পেশাল মেনূ দেখুন
        </a>
      </div>
    </div>
  </div>
</section>
  {/* // Banner section end */}


  {/* Menu Section Start */}
  <div id='Menu' className='mt-8 mb-16'>
  <section className="w-[90%] lg:max-w-7xl mx-auto">
      <div className=" bg-[#FF01010D] px-10 py-24" style={{ borderTopRightRadius: '250px', borderBottomLeftRadius: '100px' }}>
        <h2 className="text-center text-xl lg:text-3xl font-bold">আমাদের স্পেশাল মেনু</h2>
        <hr className="w-[15%] mx-auto mt-3 bg-black p-[1px]" />
        <Items/>     
      </div>
    
    </section>
  </div>
    {/* Menu Section end */}

   
   {/* Branch Section Start */}
              <div>
                <BranchesPage/>
              </div>
   {/* Branch Section  End */}

    
    {/* Delivery Partner Start */}
      <section className="w-[90%] lg:max-w-7xl mx-auto">
    <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center justify-center'>
             <h2 className='font-bold text-2xl lg:text-3xl text-[#000]'>আমাদের ডেলিভারি পার্টনার</h2>
          </div>

          <div className='bg-white rounded-2xl shadow-lg'>
            <div className='flex justify-center border-2 border-t-0 border-r-0 border-l-0 border-b-gray-200'>
                <img src={Image1} alt="" className='h-[142px]'/>
            </div>
            <div className='flex  items-center  justify-center'>
            <div className='border-2 border-t-0 border-r-gray-200 border-l-0 border-b-0'>
              <img src={Image2} alt="" />
            </div>
            <div>
              <img src={Image3} alt="" />
            </div>

            </div>

          </div>  
    </div>  
      
      </section>


    {/* Delivery Partner End */}

{/* Slider Start */}
    <div className='mt-16 mb-10'>
      <Slider/>
    </div>
{/* Slider End */}


    <div className='mt-10 mb-10'>
      <Group/>
    </div>


  </>
  );
};

export default HomePage;
