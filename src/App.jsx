import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
