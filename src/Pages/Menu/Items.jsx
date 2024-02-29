import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import './Item.css';
import Items1 from './Items1'
import Items2 from './Items2'
import Items3 from './Items3'
import Items4 from './Items4'
import Items5 from './Items5'
import Items6 from './Items6'
const Items = () => {
  return (
    <Tab.Group>
    <Tab.List className={'flex justify-center items-center flex-wrap space-x-5 mb-4 mt-10 gap-y-5 lg:gap-y-0'}>
      <Tab as={Fragment}>
        {({ selected }) => (
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white outline-0' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028] '
            }
          >
            জনপ্রিয়
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
   
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white outline-0' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           কাচ্চি
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (

          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white outline-0' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           পোলাও
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
   
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white outline-0' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           চুইগোস্ত
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (

          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white outline-0' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           মিস্টান্ন ও পানীয়
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (

          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white outline-0' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           অন্যান্য
          </button>
        )}
      </Tab>
     
    </Tab.List>
    <Tab.Panels className={'animate-slide-in'}>
      <Tab.Panel><Items1/></Tab.Panel>
      <Tab.Panel><Items2/></Tab.Panel>
      <Tab.Panel><Items3/></Tab.Panel>
      <Tab.Panel><Items4/></Tab.Panel>
      <Tab.Panel><Items5/></Tab.Panel>
      <Tab.Panel><Items6/></Tab.Panel>
     
    </Tab.Panels>
  </Tab.Group>
  )
}

export default Items