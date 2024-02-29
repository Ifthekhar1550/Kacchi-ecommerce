import Image1 from '../../assets/About/Image1.png';
import Image2 from '../../assets/About/Image2.png';
import Image3 from '../../assets/About/Image3.png';
import Image4 from '../../assets/About/Image4.png';
import Image5 from '../../assets/About/Image5.png';
import Image6 from '../../assets/About/Team.png';
import Image7 from '../../assets/About/Owner.png';
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Group from '../Home/Group/Group';

const AboutPage = () => {
    return (
        <>
        <section className="w-[90%] max-w-7xl mx-auto">
            {/* Image Section start */}

            <div className="flex flex-col lg:flex-row items-center gap-14">

                <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 lg:w-1/2">
                    <div className='lg:col-span-3 flex flex-col justify-end'>
                        <img src={Image1} alt="" className='md:h-full lg:h-[181px] w-full rounded-md object-cover' />
                    </div>
                    <div className='lg:col-span-2'>
                        <img src={Image2} alt="" className='md:h-full   w-full rounded-md object-cover' />
                    </div>

                    <div className='lg:col-span-2 '>
                        <img src={Image3} alt="" className='md:h-full lg:h-[181px]  w-full rounded-md object-cover' />
                    </div>
                    <div className='lg:col-span-2'>
                        <img src={Image4} alt="" className='md:h-full    w-full rounded-md object-cover' />
                    </div>
                    <div className='lg:col-span-2'>
                        <img src={Image5} alt="" className='md:h-full lg:h-[181px]  w-full rounded-md object-cover' />
                    </div>

                </div>

                <div>
                    <h1 className="text-3xl font-bold sm:text-5xl text-[#101828] text-center">
                        ঐতিহ্যবাহী কাচ্চি মানেই<br />
                        কাচ্চি ভাই এর কাচ্চি
                    </h1>

                </div>
            </div>

            {/* Image Section End */}


            {/* Story Section Start */}

            <div className='flex flex-col lg:flex-row  gap-14 mt-14 mb-10'>
                <div className='w-full sm:w-[80%]'>
                    <h1 className='text-center text-2xl font-bold sm:text-3xl text-[#FE0000] sm:text-left'>
                        আমাদের গল্প
                    </h1>
                    <p className='text-center mt-5 text-lg leading-10 sm:text-justify'>
                        কাচ্চি ভাই এর প্রতিষ্ঠাতা সোহেল সিরাজ এর নিজে কিছু করার ইচ্ছা থেকেই “কাচ্চি ভাই” এর যাত্রা শুরু । কাচ্চি ভাইয়ের প্রথম ব্রাঞ্চটা খোলা হয়েছিল বসুন্ধরা গেটে। সেখানে পর্যাপ্ত ইলেকট্রিসিটি ছিল না। যে কারণে প্রথম ব্রাঞ্চ এসি ছাড়া খুলা হয়েছিল। মানুষ কাচ্চি খেতে আসতেছিল,প্রচণ্ড গরমে মানুষ ঘেমে অস্থির হয়ে যাচ্ছিল,গালি দিচ্ছিল,পরের দিন তারাই আবার আসতেছিল কাচ্চি খেতে। গল্পটা এভাবেই শুরু হয়েছিল।
                    </p>
                </div>
                <div>
                    <img src={Image6} alt="" className='rounded-3xl object-cover' />
                </div>
            </div>

            {/* Story Section End */}


            {/* Owner Section Start */}

            {/* Owner Section End */}
            <div className='flex flex-col lg:flex-row  gap-14 mt-10 mb-10 items-center'>
                <div className=''>
                    <img src={Image7} alt="" className=''/>
                </div>
                <div className='w-full sm:w-[60%] space-y-3'>

                    <p className='text-center mt-5 text-lg leading-10 sm:text-justify'>
                        “ আমি ছোটবেলা থেকে স্বাধীন জিনিসটা খুব পছন্দ করতাম । আমি স্বাধীন থাকবো, নিজের চিন্তা গুলো বাস্তবায়ন করব বা নিজে কিছু করব । সেই ভাবনা থেকে বসুন্ধরা গেটে “কাচ্চিভাই “ এর প্রথম ব্রাঞ্চ চালু করি । আমি চাচ্ছিলাম ব্র্যান্ড এর নাম টার সাথে “কাচ্চি” নামটা থাক , তাই “কাচ্চি” নাম টার সাথে  “ভাই” টা এড করা ,  “কাচ্চি” আর যশোরের “ভাই” - কাচ্চিভাই । প্রায় ৪০০ জনের পরিবার এখন কাচ্চিভাই , ৪০০ জনের জবের ব্যবস্থা করতে পেরেছি, এটা  আমাকে মানসিক শান্তি দেয় ।  “
                    </p>
                    <h1 className='text-center text-2xl font-bold sm:text-xl text-[#FE0000] sm:text-left mt-5'>
                        সোহেল সিরাজ
                    </h1>
                    <h1 className='text-center text-2xl font-bold sm:text-base sm:text-left'>

                        প্রতিষ্ঠাতা ,কাচ্চিভাই  </h1>

             <div className='flex items-center justify-center sm:justify-start'>       
             <RiFacebookCircleLine size={25}  className='hover:text-[#FE0000] cursor-pointer me-3'/>
          
            <div className='hover:text-[#FE0000] cursor-pointer'>
             <FaInstagram  size={25}/>
            </div>
            </div>
                </div>
            </div>

        </section>
        <div>
          <Group/>
        </div>
        </>
    );
};

export default AboutPage;