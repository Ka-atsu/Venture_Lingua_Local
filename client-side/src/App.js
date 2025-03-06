import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/pages/LoginRegisterPage';
import DialectPage from './components/pages/DialectPage';
import TagalogLearnPage from './components/pages/Tagalog/TagalogLearnPage';
import TagalogPracticePage from './components/pages/Tagalog/TagalogPracticePage';
import TagalogBasicWordsPage from './components/pages/Tagalog/TagalogBasicWordsPage';
import TagalogCommonPharsePage from './components/pages/Tagalog/TagalogCommonPharsePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DialectPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/dialectSelector" element={<DialectPage />} />
          <Route path="/tagalogLearn" element={<TagalogLearnPage />} />
          <Route path="/tagalogLearn/basicWords" element={<TagalogBasicWordsPage />} />
          <Route path="/tagalogLearn/commonPhrase" element={<TagalogCommonPharsePage />} />
          <Route path="/tagalogPractice" element={<TagalogPracticePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
