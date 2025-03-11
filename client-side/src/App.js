import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/pages/LoginRegisterPage';
import DialectPage from './components/pages/DialectPage';
import TagalogLearnPage from './components/pages/Tagalog/TagalogLearnPage';
import TagalogPracticePage from './components/pages/Tagalog/TagalogPracticePage';
import BicolanoLearnPage from './components/pages/Bicolano/BicolanoLearnPage';
import BicolanoPracticePage from './components/pages/Bicolano/BicolanoPracticePage';
import { TagalogBasicWordsPage, TagalogCommonPharsePage, TagalogPronouncePage, TagalogExpressionsPage, TagalogCulturalPage, TagalogVerbsTensesPage } from './components/pages/Tagalog/AllLearnTagalogPage';
import { TagalogPronunciationEasyPage, TagalogVocabularyEasyPage, TagalogSentenceEasyPage, TagalogPhraseEasyPage, TagalogTranslationEasyPage } from './components/pages/Tagalog/AllPracticeTagalogPage';

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
          <Route path="/tagalogPractice/vocabularyChallenge/easy" element={<TagalogVocabularyEasyPage />} />
          <Route path="/tagalogPractice/pronunciationChallenge/easy" element={<TagalogPronunciationEasyPage />} />
          <Route path="/tagalogPractice/sentenceChallenge/easy" element={<TagalogSentenceEasyPage />} />
          <Route path="/tagalogPractice/translationChallenge/easy" element={<TagalogTranslationEasyPage />} />
          <Route path="/tagalogPractice/commonPhrasesChallenge/easy" element={<TagalogPhraseEasyPage />} />

          <Route path="/bikolLearn" element={<BicolanoLearnPage />} />
          <Route path="/bikolPractice" element={<BicolanoPracticePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
