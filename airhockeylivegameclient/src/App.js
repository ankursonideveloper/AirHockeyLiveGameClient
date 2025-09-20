import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
