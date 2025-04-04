
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
export default function App() {
  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Header />

        <Home />

        <Footer />
      </div>

    </>
  )
}
