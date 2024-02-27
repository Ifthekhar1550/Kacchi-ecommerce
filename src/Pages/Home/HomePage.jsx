
import banner from '../../assets/banner.png';
import Image1 from '../../assets/Delivery-Partner/Foodpanda.png';
import Image2 from '../../assets/Delivery-Partner/Foodi.png';
import Image3 from '../../assets/Delivery-Partner/Pathao.png';
import Menu from '../Menu/Menu';

const HomePage = () => {
  return(
<>
  {/* // Banner section start */}
<section
  className="relative  bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div
  className="absolute inset-0"
  ></div>

  <div
    className="relative mx-auto  py-32  lg:flex lg:justify-center lg:h-screen lg:items-center lg:px-8 max-w-7xl"
  >
    <div className="text-center">
      <h1 className="text-4xl font-extrabold sm:text-6xl text-white ">
      ঐতিহ্যবাহী <span className='text-primary'>কাচ্চি</span> সেরা স্বাদে
      </h1>

      <div className="absolute mt-10 left-[83px] lg:mt-48 sm:left-14 flex flex-wrap gap-4">
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
    <Menu/>
  </div>
    {/* Menu Section end */}

   
   {/* Branch Section Start */}
              <div></div>
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


  </>
  );
};

export default HomePage;
