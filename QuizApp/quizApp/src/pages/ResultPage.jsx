import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/");
    return null;
  }

  const { score, total } = location.state;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Score</h1>
        <p className="text-2xl mb-6">
          {score} / {total}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
