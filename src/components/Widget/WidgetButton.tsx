import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import WidgetForm from './WidgetFrom'
export default function WidgetButton() {
  return (
    <Popover className=" fixed right-5 bottom-3 flex items-end flex-col">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brandColor-500  text-white h-12 rounded-full px-3 flex items-center group">
        <ChatTeardropDots className='h-6 w-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xl transition-all duration-300 ease-linear'>
          <span className='pl-2'>
            FeedBack
          </span>
        </span>
      </Popover.Button>
    </Popover>
  )
}
