import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Provider } from "react-redux";
import Store from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
