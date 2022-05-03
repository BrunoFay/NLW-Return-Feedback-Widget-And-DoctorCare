import { createContext } from "react";

export interface IFEEDBACK_TYPES {
  [type: string]: { title: string, img: { src: string, alt: string } }
}
export interface IContext {
  feedbackTypeState: string ,
  setFeedbackTypeState: (type: string) => void,
  FEEDBACK_TYPES: IFEEDBACK_TYPES
}
const feedBackContext = createContext<IContext | {}>({})
export default feedBackContext