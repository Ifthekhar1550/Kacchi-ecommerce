import banner from '../../assets/banner.png'


const HomePage = () => {
  return(

  // Banner section start
<section
  className="relative  bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div
  className="absolute inset-0"
  ></div>

  <div
    className="relative mx-auto  py-32  lg:flex lg:justify-center lg:h-screen lg:items-center lg:px-8"
  >
    <div className="text-center">
      <h1 className="text-4xl font-extrabold sm:text-6xl text-white ">
      ঐতিহ্যবাহী <span className='text-primary'>কাচ্চি</span> সেরা স্বাদে
      </h1>

      <div className="absolute mt-10 left-[83px] lg:mt-48 sm:left-14 flex flex-wrap gap-4">
        <a
          href="#"
          className="block w-full  bg-primary px-8 py-3 font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto rounded-full text-sm lg:text-lg"
        >
          আমাদের স্পেশাল মেনূ দেখুন
        </a>
      </div>
    </div>
  </div>
</section>
  // Banner section end

  );
};

export default HomePage;
