import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from "./Pages/LogIn";
import MainApp from "./Pages/MainApp";
import NotFound from "./Pages/NotFound";
import SignUp from "./Pages/SignUp";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="login" element={<LogIn />} />
            <Route path="app" element={<MainApp />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
    </div>
  );
}

export default App;
