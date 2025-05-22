import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 
import Home from "./pages/Home";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <>
      <CurrencyProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Home />
      </CurrencyProvider>

    </>
  );
}

export default App;