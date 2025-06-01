import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import { CurrencyProvider } from "./context/CurrencyContext";
import { TranslationProvider } from "./context/TranslationContext";
import AuthSuccess from "./pages/AuthSuccess";

function App() {
  return (
    <TranslationProvider>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthSuccess />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CurrencyProvider>
    </TranslationProvider>
  );
}

export default App;