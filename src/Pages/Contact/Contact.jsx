import Image1 from '../../assets/Phone.svg'
import Image2 from '../../assets/Email.svg'

const Contact = () => {
  return (
   <section className='w-[90%] max-w-7xl mx-auto'>

   <section className="bg-gray-100">
   <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <h1 className='font-bold text-5xl text-center mb-8'>Get In Touch Today</h1>
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        A simple word of Hello will keep the relation and friendship keep going, keep in touch.
        </p>

        <div className="mt-8">
          <div className='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-5 hover:scale-95 transform transition-transform duration-300 mb-5'>
          <img src={Image1} alt="" />
          <a href="#" className="text-2xl font-bold text-pink-600"> +880 1712-744447</a>
          </div>

          <div className='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-5 hover:scale-95 transform transition-transform duration-300'>
          <img src={Image2} alt="" />
          <a href="#" className="text-2xl font-bold text-pink-600"> kacchivhai@gmail.com
         </a>
         </div>
        
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 ">
        <form action="#" className="space-y-8">
          <div>
            <label className='font-bold' htmlFor='name'>Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3 outline-light-blue-500"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="font-bold" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3 outline-light-blue-500"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="font-bold" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3 outline-light-blue-500"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

        

          <div>
            <label className="font-bold" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm mt-3 outline-light-blue-500"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-[#FE0000] px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</section>
  )
}

export default Contact