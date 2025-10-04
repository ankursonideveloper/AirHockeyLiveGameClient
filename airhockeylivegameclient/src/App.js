import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import { AuthProvider } from "./Components/context/AuthContext"; // Import AuthProvider
import PrivateRoute from "./Components/PrivateRoute"; // Import PrivateRoute

// A small wrapper to allow AuthProvider to use hooks like useNavigate
const AppWrapper = () => {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
};

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

// Export the wrapper as the main component
export default AppWrapper;
