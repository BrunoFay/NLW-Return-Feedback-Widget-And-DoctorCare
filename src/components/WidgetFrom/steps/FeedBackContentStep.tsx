import { ArrowLeft } from 'phosphor-react'
import { FormEvent, useContext, useState } from 'react'
import feedBackContext, { IContext } from '../../../context/feedBackContext'
import { api } from '../../../service/api'
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
    let response;
    e.preventDefault()
    setIsFeedbackSend(true)
    screenShot ?
      response = await api.post('/feedbacks', {
        type: feedBackTypeState,
        comment: feedBackComment,
        screenshot: screenShot
      }) :
      response = await api.post('/feedbacks', {
        type: feedBackTypeState,
        comment: feedBackComment,
      })
    console.log(response);
    setIsFeedbackSend(false)
    setFeedbackSendSuccessfully(true)
  }

  return (
    <>
      <header className='flex'>
        <button
          type="button"
          onClick={() => setFeedBackTypeState('')}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
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
          className='w-full min-h-[112px] min-w-[304px] text-sm p-4 border-2 placeholder-zinc-400 text-zinc-100 rounded-md bg-transparent focus:outline-none focus:border-mainYellow-500 focus:ring-mainYellow-500 scroll focus:ring-1 focus:resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin '
          onChange={({ target }) => setFeedBackComment(target.value)}
        />
        <footer className='flex gap-2 mt-2' >
          <ScreenshotButton setScreenShot={setScreenShot} screenShot={screenShot} />
          <button
            className='p-2 bg-mainYellow-800 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-mainYellow-500 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-mainYellow-500  transition-colors
            disabled:opacity-50 disabled:bg-mainYellow-800'
            disabled={feedBackComment.length <= 2 || isFeedbackSend}
          >
            {isFeedbackSend ? <Loading /> : 'Send your Feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
