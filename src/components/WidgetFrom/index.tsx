import { useContext } from 'react'
import feedBackContext, { IContext } from '../../context/feedBackContext'
import FeedBackContentStep from './steps/FeedBackContentStep'
import FeedBackTypeStep from './steps/FeedBackTypeStep'

export default function WidgetForm() {
  const {  feedbackTypeState } = useContext(feedBackContext) as IContext

  return (
    <div className='bg-[#18181B] rounded-2xl relative flex items-center flex-col p-4 mb-4 w-[calc(100vw-2rem)] md:w-auto shadow-lg text-[#f4f4f5]' >

      {
        !feedbackTypeState ? (
          <FeedBackTypeStep />
        ) : (
          <FeedBackContentStep />
        )
      }
      <footer className='text-[#A1A1AA]'>Feito com ♥ pela Rocketseat</footer>
    </div >
  )
}
