import { Link } from "react-router-dom";
import OfferData from "./OfferData"
import { FaArrowRight } from "react-icons/fa";

const Offer = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto">
    <h1 className='font-bold text-4xl text-center mb-8 mt-8'>
          আমাদের অফার দেখুন
    </h1>
 

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {OfferData.map(item => (
            <div className='flex items-center justify-center rounded-lg bg-white p-8 shadow-lg   hover:scale-95 transform transition-transform duration-300 mb-5' key={item.id}>
                <div className=''>
                  <Link to={`${item.link}`}>
                    <img src={item.image} alt="" className="w-[337px] h-[197px] object-cover"/>
                    <p className='font-bold text-xl mb-3 mt-5 text-center'>{item.title}</p>
                  <div className="flex justify-center items-center text-lg">
                    ব্রাঞ্চ দেখুন <FaArrowRight className={'ms-3'}/>
                 </div>
                 <p className=' text-base mb-3 mt-5 text-center'>{item.description}</p>
                 </Link>
                </div>
            </div>
        ))}
    </div>
  
</section>
  )
}

export default Offer