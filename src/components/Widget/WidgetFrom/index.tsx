import { useContext } from 'react'
import feedBackContext, { IContext } from '../../../context/feedBackContext'
import FeedBackContentStep from './steps/FeedBackContentStep'
import FeedBackSuccessStep from './steps/FeedBackSuccessStep'
import FeedBackTypeStep from './steps/FeedBackTypeStep'

export default function WidgetForm() {
  const { feedBackTypeState, feedbackSendSuccessfully } = useContext(feedBackContext) as IContext

  return (
    <div className='text-[#18181B] rounded-2xl relative flex items-center flex-col p-4 mb-4 w-[calc(100vw-2rem)] md:w-auto shadow-lg bg-[#ffffffff] ring-2 ring-brandColor-500' >

      {feedbackSendSuccessfully ? (<FeedBackSuccessStep />) : (
        <>
          {
            !feedBackTypeState ? (
              <FeedBackTypeStep />
            ) : (
              <FeedBackContentStep />
            )
          }
        </>)

      }
      <footer className='text-[#A1A1AA]'>Feito com ♥ pela Rocketseat</footer>
    </div >
  )
}
