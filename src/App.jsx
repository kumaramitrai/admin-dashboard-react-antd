import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./css/custom.css";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";
import Login from "./pages/Auth/Login";
import {
  useUserInfo,
  useUserToken,
  useUserActions,
  useUserData,
} from "./store/userStore";

function App() {
  const userInfo = useUserInfo();
  const userToken = useUserToken();
  const userAction = useUserActions();
  const userData = useUserData();
  console.log("userInfoasdasd", userInfo);
  console.log("userToken", userToken);
  console.log("userAction", userAction);
  console.log("userData", userData);

  return (
    <Router>
      {/* Conditional rendering based on userInfo */}
      {Object.keys(userInfo).length !== 0 ? (
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
            <Route path="/about/list" element={<About />} />
            <Route path="/about/list/update" element={<About />} />
            <Route path="/about/list/create" element={<About />} />
          </Route>
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </MainLayout>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Add more routes for non-authenticated users if needed */}
        </Routes>
      )}
    </Router>
    // <Router>
    //   <Routes>
    //     {/* If userInfo is not available, navigate to the Login page */}
    //     {!userInfo && <Route path="/" element={<Navigate to="/login" />} />}
    //     {/* Routes for authenticated users */}
    //     {userInfo && (
    //       <Route element={<MainLayout />}>
    //         {/* Nested routes for authenticated users */}
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact-us" element={<ContactUs />} />
    //       </Route>
    //     )}
    //     {/* Login route */}
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
