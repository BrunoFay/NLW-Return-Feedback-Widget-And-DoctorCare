import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import feedBackContext, { IContext } from '../../../../context/feedBackContext'
import { api } from '../../../../service/api'
import CloseButton from '../../CloseButton'
import Loading from '../../Loading'
import ScreenshotButton from '../ScreenshotButton'


export default function FeedBackContentStep() {
  const { FEEDBACK_TYPES,
    feedBackTypeState,
    setFeedBackTypeState,
    setFeedbackSendSuccessfully,
  } = useContext(feedBackContext) as IContext

  const feedBackObj = FEEDBACK_TYPES[feedBackTypeState]
  const [screenShot, setScreenShot] = useState<string | null>(null)
  const [feedBackComment, setFeedBackComment] = useState<string>('')
  const [isFeedbackSend, setIsFeedbackSend] = useState<boolean>(false)

  const handleSubmitFeedBack = async (e: FormEvent) => {
    e.preventDefault()
    setIsFeedbackSend(true)
 /*    screenShot ?
      await api.post('/feedbacks', {
        type: feedBackTypeState,
        comment: feedBackComment,
        screenshot: screenShot
      }).finally(() => {
        setIsFeedbackSend(false)
        setFeedbackSendSuccessfully(true)
      }) :
      await api.post('/feedbacks', {
        type: feedBackTypeState,
        comment: feedBackComment,
      }).finally(() => {
        setIsFeedbackSend(false)
        setFeedbackSendSuccessfully(true)
      }) */
      setTimeout(() => {
        setIsFeedbackSend(false)
        setFeedbackSendSuccessfully(true)

      }, 1500)
  }

  return (
    <>
      <header className='flex'>
        <button
          type="button"
          onClick={() => setFeedBackTypeState('')}
          className="absolute top-5 left-5 text-zinc-600 hover:text-zinc-900">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2' >
          <img
            src={feedBackObj.img.src}
            alt={feedBackObj.img.alt}
            className='w-6 h-6' />
          {feedBackObj.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedBack} className='my-4 w-full'>
        <textarea
          placeholder='Write your FeedBack'
          className='w-full min-h-[112px] min-w-[304px] text-sm p-4 border-2 placeholder-zinc-400 text-zinc-800 rounded-md bg-transparent focus:outline-none focus:border-brandColor-500 focus:ring-brandColor-500 scroll focus:ring-1 focus:resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin '
          onChange={({ target }) => setFeedBackComment(target.value)}
        />
        <footer className='flex gap-2 mt-2' >
          <ScreenshotButton setScreenShot={setScreenShot} screenShot={screenShot} />
          <button
            className='p-2 bg-green-600 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brandColor-500 text-[#ffff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-mainYellow-500  transition-colors
            disabled:opacity-50 disabled:bg-green-600'
            disabled={feedBackComment.length <= 2 || isFeedbackSend}
          >
            {isFeedbackSend ? <Loading /> : 'Send your Feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
