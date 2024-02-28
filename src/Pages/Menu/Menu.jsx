import Items from "./Items";
import Group from '../Home/Group/Group'

const Menu = () => {
  return (
    <>
    <section className="w-[90%] lg:max-w-7xl mx-auto">
      <div className=" bg-[#FF01010D] px-8 py-16" style={{ borderTopRightRadius: '250px', borderBottomLeftRadius: '100px' }}>
        <h2 className="text-center text-xl lg:text-3xl font-bold">আমাদের স্পেশাল মেনু</h2>
        <hr className="w-[15%] mx-auto mt-3 bg-black p-[1px]" />
        <Items/>     
      </div>
    
    </section>
      <div className="mt-5 mb-5">
      <Group/>
      </div>
      </>
  )
}

export default Menu;