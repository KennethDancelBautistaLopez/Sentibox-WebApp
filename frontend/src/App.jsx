import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
// import UserIdentity from "./pages/userIdentity/UserIdentity";
import Account from "./components/sidebar/Account";
// import Profile from "./components/sidebar/Profile";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      {/* <Profile /> */}

      {/* <Account /> */}

      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/people"
          element={authUser ? <Navigate to="/" /> : <UserIdentity />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/login" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
