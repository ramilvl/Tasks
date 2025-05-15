import React from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const categories = ["HTML", "CSS", "JavaScript", "Accessibility"];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6">Frontend Quiz!</h1>
        <p className="mb-8 text-slate-400">Pick a subject to get started:</p>
        <div className="space-y-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate(`/quiz/${category.toLowerCase()}`)}
              className="w-full bg-slate-800 hover:bg-slate-700 transition p-4 rounded-xl text-left font-medium"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
