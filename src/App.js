import Header from "./components/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="cursor-default">
      <Header />
      <HomePage />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
