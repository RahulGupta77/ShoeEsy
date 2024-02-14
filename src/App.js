import Header from "./components/Navbar/Header"; 
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="cursor-default">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
