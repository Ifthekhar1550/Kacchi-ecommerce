import Image1 from '../../assets/testimonial-1.jpg';
import Image2 from '../../assets/testimonial-2.jpg';
import Image3 from '../../assets/testimonial-3.jpg';
import Image4 from '../../assets/testimonial-4.jpg';
import Group from '../Home/Group/Group';

const Review = () => {
  return (
    <>
    <section className='w-[90%] max-w-7xl mx-auto mt-10 mb-20'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>

    <div className='flex flex-col'>
    <a href="#" className="flex-grow block">
   <img
    alt=""
    src={Image1}
    className="aspect-square h-[400px] lg:h-[580px] object-cover rounded-t-2xl"
   />

   <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">
    Siam Ahmed
    </h3>

   <p className="mt-2  text-gray-700 text-center font-bold">
   কাচ্চি ভাইয়ের গ্রুপে বন্ধুদের মেনশন এবং জয়েন দিয়ে আমি পেয়ে গেছি ১ঃ৩ কাচ্চি একদম ফ্রী তে তাদের কাচ্চির স্বাদটা সত্যিই বেস্ট। ঝরঝরে কাচ্চির রসালো মাটন পিসের স্বাদটা সবথেকে সেরা।
   </p>
  </a>
  </div>  

    <div className='flex flex-col'>
    <a href="#" className="flex-grow block">
   <img
    alt=""
    src={Image2}
    className="aspect-square h-[400px] lg:h-[580px] object-cover rounded-t-2xl"
   />

   <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">
  Trisha Mun
    </h3>

   <p className="mt-2  text-gray-700 text-center font-bold">
   কাচ্চি খাওয়ার প্রসঙ্গ যখন উঠে , তখন সবার প্রথমে Kacchi Bhai এর কথাই মাথায় আসে । আমার কাছে তাদের কাচ্চিটা পারফেক্ট মনে হয়। কাচ্চিতে তেলতেলে ভাব নাই বল্লেই চলে। মাটনের পিস গুলো ভালোই বড়, আর সফট। আলু ধরলেই ভেঙে যায় এতো সফট ❤️
   </p>
  </a>
  </div>  

    <div className='flex flex-col'>
    <a href="#" className="flex-grow block">
   <img
    alt=""
    src={Image3}
    className="aspect-square h-[580px] object-cover rounded-t-2xl"
   />

   <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">
     Shamimur Rahman
    </h3>

   <p className="mt-2  text-gray-700 text-center font-bold">
   বৃষ্টিস্নাত আবহাওয়ায় কাচ্চি , আর সেই কাচ্চি যদি কাচ্চি ভাই এর হয় তাহলে আর তো কোন কথাই নাই! তাদের খাবার এর মান সবসময় ভালো ছিল এবারও তার ব্যতিক্রম নয়, রাইসের পরিমান বেশ ভালো ছিলো এবং মাটনগুলো বেশ সফট ছিলো এবং মাটনের সাইজ গুলো আগের চেয়ে বড় ছিল।
   </p>
  </a>
  </div>  
    <div className='flex flex-col'>
    <a href="#" className="flex-grow block">
   <img
    alt=""
    src={Image4}
    className="aspect-square h-[400px] lg:h-[580px] object-cover rounded-t-2xl"
   />

  <div>
  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl text-center">
  Xayan Ahmed
    </h3>

   <p className="mt-2  text-gray-700 text-center font-bold inline-block">
   Kacchi Bhai এর কাচ্চিতে বড় মাটন পিস এবং বাসমতি চালের ঝরঝরে কাচ্চি দেখে নিজে আর লোভ সামলাতে পারিনা।ট্রেডিশনাল কাচ্চির স্বাদটা সাভারে কাচ্চি ভাই আসার পর থেকে বুঝতে পারলাম। তাদের কাচ্চিটা অনেক বেশী মজার ৩ জনের কাচ্চি নিয়েছিলাম রাইস ছিলো কাচ্চিতে পর্যাপ্ত
   </p>
  </div>
  </a>
  </div>  

    </div>
    </section>
    <section>
      <Group/>
    </section>
    </>
  )
}

export default Review