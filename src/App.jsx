import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Toaster />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
