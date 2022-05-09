import Widget from "./components/Widget/WidgetButton";
import FeedBackProvider from "./context/FeedBackProvider";
export function App() {

  return (
    <>
      <FeedBackProvider>
        <Widget />
      </FeedBackProvider>
    </>
  )
}
