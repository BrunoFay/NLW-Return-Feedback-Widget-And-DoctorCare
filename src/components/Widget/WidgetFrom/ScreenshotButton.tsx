import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import Loading from "../Loading";

interface IScreenShot {
  screenShot: string | null
  setScreenShot: (s: string | null) => void
}
export default function ScreenshotButton({ setScreenShot, screenShot }: IScreenShot) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Img = canvas.toDataURL("image/png");
    setScreenShot(base64Img)
    setIsTakingScreenshot(false)
  }
  if (screenShot) {
    return (
      <button
        type="button"
        onClick={() => setScreenShot(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenShot})`,
          backgroundPosition: 'right bottom ',
          backgroundSize: 1
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }
  return (
    <button
      type='button'
      onClick={handleTakeScreenshot}
      className='p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-mainYellow-500  transition-colors'>
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  )
}
