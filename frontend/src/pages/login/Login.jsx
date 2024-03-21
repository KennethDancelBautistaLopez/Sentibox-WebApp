import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="w-px">
      <div className="bg-white flex flex-col items-center justify-center rounded-border min-w-96 mx-auto">
        <div className="w-full p-6  rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-blac">
            <strong>Login</strong>
            <span className="text-violet-400"> Sentibox</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full input input-bordered h-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link
              to="/signup"
              className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
      <div
        className="absolute text-6xl right-80 top-48 transform -translate-y-1/2 w-full text-center text-black"
        style={{
          fontFamily: "Inter",
          fontSize: "70px",
          fontWeight: "100",
          lineHeight: "58.09px",
          textAlign: "center",
        }}
      >
        <strong className="text-with-shadow">
          <span
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "#000000",
            }}
          >
            Welcome
          </span>{" "}
          <span style={{ color: "#B946FF" }}>| Sentibox,</span>
        </strong>
      </div>

      <div className="absolute top-64 left-48" style={{ marginLeft: "-100px" }}>
        <div
          className="bg-blue-500 text-white px-8 py-4 rounded-full"
          style={{
            width: "380px",
            maxWidth: "80%",
            opacity: "0.9",
          }}
        >
          <p className="text-sm">where you can express, empower,</p>
        </div>
      </div>
      <div className="absolute top-72 left-48" style={{ marginLeft: "90px" }}>
        <div
          className="bg-gray-400 text-white px-8 py-4 rounded-full mt-10"
          style={{
            width: "500px",
            maxWidth: "80%",
            opacity: "0.9",
          }}
        >
          <p className="text-sm">
            and evolve your daily sentiments. Your voice, your journey.
          </p>
        </div>
      </div>
      <div
        className="absolute top-72 left-48"
        style={{ top: "72%", right: "73%", transform: "translate(-50%, -50%)" }}
      >
        <div
          className="bg-blue-500 text-white px-8 py-4 rounded-full"
          style={{
            width: "380px",
            maxWidth: "30%",
            opacity: "0.9",
            position: "relative",
          }}
        >
          <p className="text-sm"></p>
          {}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          ></div>
          {}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) translateX(-10px)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          ></div>
          {}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) translateX(10px)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Login;
