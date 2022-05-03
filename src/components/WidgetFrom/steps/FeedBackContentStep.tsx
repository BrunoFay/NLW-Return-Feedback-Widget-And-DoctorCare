import { useContext } from 'react'
import feedBackContext, { IContext } from '../../../context/feedBackContext'
import BackButton from '../../BackButton'
import CloseButton from '../../CloseButton'


export default function FeedBackContentStep() {
  const { FEEDBACK_TYPES,feedbackTypeState } = useContext(feedBackContext) as IContext
  const feedBackObj = FEEDBACK_TYPES[feedbackTypeState]
  return (
    <>
      <header className='flex'>
        <BackButton />
        <span className='text-xl leading-6 flex items-center gap-2' >
          <img
            src={feedBackObj.img.src}
            alt={feedBackObj.img.alt}
            className='w-6 h-6' />
          {feedBackObj.title}
        </span>
        <CloseButton />
      </header>
      <div className='flex py-8 gap-2 w-full'>

      </div>
    </>
  )
}
