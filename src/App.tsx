import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import Header from "./shared/Header"
import CartPage from "./pages/CartPage/view/CartPage"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <ToastContainer></ToastContainer>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </>
  )
}

export default App
