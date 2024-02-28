import Image1 from '../../../assets/Group.png';
const Group = () => {
  return (
    <section className="w-[90%] lg:max-w-7xl mx-auto bg-[#1f2022] rounded-lg px-7 py-12">
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6'>
      

          <div className=''>
   
            <div className='flex flex-col lg:flex-row items-center justify-center space-x-5'>
            <div className=''>
              <img src={Image1} alt="" className='w-24 h-24'/>
            </div>
            <div>
            <h2 className='font-bold text-lg lg:text-xl text-[#FFFf]'>
            Our Official FB Group
            </h2>
            <p className='font-normal text-lg lg:text-md text-[#FFFf] mt-4'>Join the 80,500+ people</p>
            </div>

            </div>
          </div>

          <div className='flex items-center justify-center'>
             <button className=''><a href="https://www.facebook.com/groups/kacchibhai" className='font-bold hover:bg-[#FE0000] text-white px-10 rounded-full py-2 border-2 border-white text-xl'>
                Join</a>
            </button>
          </div>  
    </div>  
      
    </section>
  )
}

export default Group