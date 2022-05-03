import { ArrowLeft } from "phosphor-react";
import { useContext } from "react";
import feedBackContext, { IContext } from "../context/feedBackContext";

export default function BackButton() {
  const { setFeedbackTypeState } = useContext(feedBackContext) as IContext;
  return (
    <button
    type="button"
    onClick={() => setFeedbackTypeState('')} 
    className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100">
      <ArrowLeft weight="bold" className="w-4 h-4"/>
    </button>
  )
}
