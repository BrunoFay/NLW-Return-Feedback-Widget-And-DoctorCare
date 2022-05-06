import { createContext } from "react";

export interface IFEEDBACK_TYPES {
  [type: string]: { title: string, img: { src: string, alt: string } }
}
export interface IContext {
  feedBackTypeState: string,
  setFeedBackTypeState: (type: string) => void,
  FEEDBACK_TYPES: IFEEDBACK_TYPES,
  feedbackSendSuccessfully: string,
  setFeedbackSendSuccessfully: (b: boolean) => void,
  resetFeedBack: () => void
}
const feedBackContext = createContext<IContext | {}>({})
export default feedBackContext