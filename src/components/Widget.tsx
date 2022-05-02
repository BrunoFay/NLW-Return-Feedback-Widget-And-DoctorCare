import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
export default function Widget() {
  return (
    <Popover className=" absolute right-5 bottom-5 ">
      <Popover.Panel>
        hello world
      </Popover.Panel>
      <Popover.Button className="bg-black  text-yellow-400 h-12 rounded-full px-3 flex items-center group">
        <ChatTeardropDots className='h-6 w-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xl group-focus:max-w-xl transition-all duration-300 ease-linear'>
          <span className='pl-2'>
            FeedBack
          </span>
        </span>
      </Popover.Button>
    </Popover>
  )
}
