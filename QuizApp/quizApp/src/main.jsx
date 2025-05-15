import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuizPage from "./pages/QuizPage.jsx";       
import ResultPage from "./pages/ResultPage.jsx";   

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz/:category" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  </BrowserRouter>
)
