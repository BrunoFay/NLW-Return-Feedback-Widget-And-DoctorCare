import Widget from "./components/Widget/WidgetButton";
import Presentation from "./components/Page/Presentation";
import FeedBackProvider from "./context/FeedBackProvider";

export function App() {
  return (
    <>
      <FeedBackProvider>
        <main className="container-page flex justify-center">
          <Presentation />
        </main>
        <Widget />
      </FeedBackProvider>
    </>
  )
}
