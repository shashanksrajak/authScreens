import SignUp from "./pages/signup";
import SignIn from "./pages/signin";

import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("sign-up");

  return (
    <>
      <div className="toggle_screen_wrapper">
        {screen === "sign-up" ? (
          <button
            className="toggle_screen"
            onClick={() => {
              setScreen("sign-in");
            }}
          >
            Signin
          </button>
        ) : (
          <button
            className="toggle_screen"
            onClick={() => {
              setScreen("sign-up");
            }}
          >
            Signup
          </button>
        )}
      </div>

      {screen === "sign-up" && <SignUp />}
      {screen === "sign-in" && <SignIn />}
    </>
  );
}

export default App;
