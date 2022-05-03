import Widget from "./components/WidgetButton";
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
