
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Items1 from './Items1'
import Items2 from './Items2'
const Items = () => {
  return (
    <Tab.Group>
    <Tab.List className={'flex justify-center items-center flex-wrap space-x-5 mb-4 mt-10 gap-y-5 lg:gap-y-0'}>
      <Tab as={Fragment}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white border-none' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028] '
            }
          >
            জনপ্রিয়
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           কাচ্চি
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           পোলাও
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           চুইগোস্ত
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           মিস্টান্ন ও পানীয়
          </button>
        )}
      </Tab>
      <Tab as={Fragment}>
        {({ selected }) => (
          /* Use the `selected` state to conditionally style the selected tab. */
          <button
            className={
              selected ? 'border border-[#fe0000] rounded-full font-bold px-3 py-1  bg-primary text-white border-none' : 'border border-[#fe0000] rounded-full font-bold px-3 py-1  text-primary hover:bg-[#FE000028]'
            }
          >
           অন্যান্য
          </button>
        )}
      </Tab>
     
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel><Items1/></Tab.Panel>
      <Tab.Panel><Items2/></Tab.Panel>
      <Tab.Panel>Content 3</Tab.Panel>
      <Tab.Panel>Content 4</Tab.Panel>
      <Tab.Panel>Content 5</Tab.Panel>
      <Tab.Panel>Content 6</Tab.Panel>
     
    </Tab.Panels>
  </Tab.Group>
  )
}

export default Items