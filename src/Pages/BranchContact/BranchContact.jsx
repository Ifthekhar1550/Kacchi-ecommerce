import Group from '../Home/Group/Group';
import Data from './Data';

const BranchContact = () => {

return (
        <>
            <section className="w-[90%] max-w-7xl mx-auto">
                <h1 className='font-bold text-4xl text-center mb-8 mt-8'>
                    আমাদের ব্রাঞ্চসমূহের কন্টাক্ট নাম্বার
                </h1>
                <h1 className='font-medium text-xl text-center mb-14 mt-8 text-[#6E7191]'>
                    যোগাযোগ হলো একটি সুস্থ সম্পর্কের ভিত্তিপ্রস্তর ।
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {Data.map(item => (
                        <div className='flex items-center justify-between rounded-lg bg-white p-8 shadow-lg  lg:p-5 hover:scale-95 transform transition-transform duration-300 mb-5' key={item.id}>
                            <div className=''>
                                <p className='font-bold text-xl mb-3'>{item.title}</p>
                                <p>{item.number}</p>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-3xl bg-[#FE0000] px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    কল করুন
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
              <div className='flex flex-col lg:flex-row items-center  lg:justify-between rounded-lg bg-white p-8 shadow-lg  lg:p-5 mb-5 mt-9'>
                <div>
                 <h1 className='text-lg'>এছাড়া আমাদের ব্রাঞ্চ সমূহের লোকেশন সহ বিস্তারিত দেখতে ভিজিট করুন</h1>
                </div>
                <a href="/branch">
                <button type="submit" className=" border inline-block w-full rounded-xl bg-white hover:bg-[#FE0000] px-5 py-3 font-medium text-black sm:w-auto hover:text-white transform duration-300">
                বিস্তারিত দেখুন
                </button>
                </a>
              </div>
            </section>
            <div className='mt-10'>
                <Group/>
            </div>
        </>
    )
}

export default BranchContact