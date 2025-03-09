import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/pages/LoginRegisterPage';
import DialectPage from './components/pages/DialectPage';
import TagalogLearnPage from './components/pages/Tagalog/TagalogLearnPage';
import TagalogPracticePage from './components/pages/Tagalog/TagalogPracticePage';
import TagalogBasicWordsPage from './components/pages/Tagalog/Learn Tagalog/TagalogBasicWordsPage';
import TagalogCommonPharsePage from './components/pages/Tagalog/Learn Tagalog/TagalogCommonPharsePage';
import TagalogPronouncePage from './components/pages/Tagalog/Learn Tagalog/TagalogPronouncePage';
import TagalogVerbsTensesPage from './components/pages/Tagalog/Learn Tagalog/TagalogVerbsTensesPage';
import TagalogExpressionsPage from './components/pages/Tagalog/Learn Tagalog/TagalogExpressionsPage';
import TagalogCulturalPage from './components/pages/Tagalog/Learn Tagalog/TagalogCulturalPage';
import TagalogVocabularyPage from './components/pages/Tagalog/Practice Tagalog/TagalogVocabularyPage';

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
          <Route path="/tagalogLearn/pronounce&sentence" element={<TagalogPronouncePage />} />
          <Route path="/tagalogLearn/verbs&tenses" element={<TagalogVerbsTensesPage />} />
          <Route path="/tagalogLearn/usefulExpressions" element={<TagalogExpressionsPage />} />
          <Route path="/tagalogLearn/cultural" element={<TagalogCulturalPage />} />
          <Route path="/tagalogPractice" element={<TagalogPracticePage />} />
          <Route path="/tagalogPractice/vocabulary/easy" element={<TagalogVocabularyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
