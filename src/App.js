import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Navbar/Header";
import useOnlineStatus from "./customHooks/useOnlineStatus";
import OfflinePage from "./miscellaneousPages/OfflinePage";

function App() {
  const onlineStatus = useOnlineStatus();
  // const isLoggedIn = useSelector((store) => store.userDetails.isLoggedIn);
  // console.log(isLoggedIn)

  //why redux data gets refreshed when going to the wrong route
  return (
    <div className="cursor-default">
      <Header />
      {onlineStatus && <Outlet />}
      <OfflinePage onlineStatus={onlineStatus} />
      <Footer />
      <Toaster
        toastOptions={{
          className: "font-semibold tracking-wide",
          duration: 5000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;
