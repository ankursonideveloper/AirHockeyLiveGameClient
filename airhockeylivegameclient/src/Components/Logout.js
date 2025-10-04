import React, { useContext } from "react";
import { AuthContext } from "././context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex items-center justify-between px-3 py-2 my-2 bg-gray-900 rounded-lg shadow-md border border-gray-700">
      {/* Username Display */}
      <p className="text-white font-semibold text-sm bg-gray-800 px-3 py-1 rounded-md border border-gray-600">
        ankursoni2974
      </p>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg border border-red-700 transition-all duration-200"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
