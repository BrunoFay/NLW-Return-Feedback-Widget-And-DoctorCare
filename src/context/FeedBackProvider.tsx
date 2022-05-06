import React, { useState } from 'react'
import FeedbackContext from './feedBackContext';
import BugImage from '../assets/bug.svg'
import IdeaImage from '../assets/idea.svg'
import ThoughtImage from '../assets/thought.svg'

interface IFeedbackProviderProps {
  children: React.ReactNode
}
export const FEEDBACK_TYPES = {
  BUG: {
    title: 'Bug',
    img: {
      src: BugImage,
      alt: 'image of a purple caterpillar'
    }
  },
  IDEA: {
    title: 'Idea',
    img: {
      src: IdeaImage,
      alt: 'image of a light bulb'
    }
  },
  THOUGHT: {
    title: 'Thought',
    img: {
      src: ThoughtImage,
      alt: 'image of a cloud'
    }
  }
}

export type FeedbackTypes = keyof typeof FEEDBACK_TYPES

const FeedBackProvider: React.FC<IFeedbackProviderProps> = (props) => {
  const [feedBackTypeState, setFeedBackTypeState] = useState<FeedbackTypes | null>(null)
  const [feedbackSendSuccessfully, setFeedbackSendSuccessfully] = useState<boolean>(false)

  const resetFeedBack=()=>{
    setFeedbackSendSuccessfully(false)
    setFeedBackTypeState(null)
  }
  const valuesToPRovide = {
    feedBackTypeState,
    setFeedBackTypeState,
    FEEDBACK_TYPES,
    setFeedbackSendSuccessfully,
    feedbackSendSuccessfully,
    resetFeedBack
  }
  return (
    <FeedbackContext.Provider value={valuesToPRovide}>
      {props.children}
    </FeedbackContext.Provider>
  )
}
export default FeedBackProvider