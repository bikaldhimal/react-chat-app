import "./App.css";
import Signup from "./components/authentication/signup";
import Login from "./components/authentication/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/chat/chat";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} component={Login} />
          <Route path="/signup" element={<Signup />} component={Signup} />
          <Route exact path="/chat" element={<Chat />} component={Chat} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
