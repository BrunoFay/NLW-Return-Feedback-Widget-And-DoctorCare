import { useContext } from "react";
import feedBackContext, { IContext, IFEEDBACK_TYPES } from "../../../../context/feedBackContext";
import { FeedbackTypes } from "../../../../context/FeedBackProvider";
import CloseButton from "../../CloseButton";


export default function FeedBackTypeStep() {
  const {FEEDBACK_TYPES,setFeedBackTypeState}=useContext(feedBackContext) as IContext

  return (
   <>
      <header className='flex'>
          <span className='text-xl leading-6' >
            Send your Feedback
          </span>
          <CloseButton />
        </header>
     <div className='flex py-8 gap-2 w-full'>
        {
          Object.entries(FEEDBACK_TYPES as IFEEDBACK_TYPES).map(([key, value]) => (
            <button
              key={key}
              type='button'
              className='bg-zinc-800 flex gap-1 flex-col items-center py-5 w-24 flex-1
            rounded-lg border-2 border-transparent hover:border-mainYellow-500
            focus:outline-none focus:border-mainYellow-500 transition-all duration-200 ease-linear'
              onClick={()=> setFeedBackTypeState(key as FeedbackTypes)}
            >
              <img src={value.img.src} alt={value.img.alt} />
              <span> {value.title}</span>
            </button>
          ))
        }
      </div>
   </>
  )
}
