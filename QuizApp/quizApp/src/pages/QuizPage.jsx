import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "../data/questions.js";

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const questions = quizData[category] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
        <p className="text-lg">No questions found for this category.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleSelect = (option) => {
    if (isAnswered) return; 
    setSelected(option);
    setIsAnswered(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setIsAnswered(false);
    } else {
      navigate("/result", {
        state: { score, total: questions.length },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-slate-800 rounded-3xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">
            Question {currentIndex + 1} / {questions.length}
          </h2>
          <p className="text-indigo-400 font-mono tracking-wide">Score: {score}</p>
        </div>
        <h3 className="mb-8 text-xl text-white font-semibold">{currentQuestion.question}</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {currentQuestion.options.map((option) => {
            const isSelected = option === selected;

            let bgColor = "bg-slate-700 hover:bg-slate-600";
            if (isAnswered) {
              if (isSelected) {
                bgColor = option === currentQuestion.answer ? "bg-green-600" : "bg-red-600";
              } else {
                bgColor = "bg-slate-700"; 
              }
            }

            return (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                disabled={isAnswered}
                className={`${bgColor} text-white p-4 rounded-xl font-medium shadow-md transition-colors duration-300`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <button
          disabled={!isAnswered}
          onClick={handleNext}
          className={`mt-8 w-full py-3 rounded-2xl font-semibold text-white transition-colors duration-300 ${
            isAnswered
              ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              : "bg-indigo-400/50 cursor-not-allowed"
          }`}
        >
          {currentIndex + 1 === questions.length ? "Finish Quiz" : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
