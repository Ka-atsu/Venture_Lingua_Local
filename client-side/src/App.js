import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/page/LoginRegisterPage';
import DialectPage from './components/page/DialectPage';
import TagalogLearnPage from './components/page/TagalogLearnPage';
import TagalogPracticePage from './components/page/TagalogPracticePage';
import BasicWordsTagalogPage from './components/page/BasicWordsTagalogPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DialectPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/tagalogLearn" element={<TagalogLearnPage />} />
          <Route path="/tagalogLearn/BasicWords" element={<BasicWordsTagalogPage />} />
          <Route path="/tagalogPractice" element={<TagalogPracticePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
