import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/pages/LoginRegisterPage';
import DialectPage from './components/pages/DialectPage';
import TagalogLearnPage from './components/pages/Tagalog/TagalogLearnPage';
import TagalogPracticePage from './components/pages/Tagalog/TagalogPracticePage';
import BicolanoLearnPage from './components/pages/Bicolano/BicolanoLearnPage';
import BicolanoPracticePage from './components/pages/Bicolano/BicolanoPracticePage';
import CebuanoLearnPage from './components/pages/Cebuano/CebuanoLearnPage';
import CebuanoPracticePage from './components/pages/Cebuano/CebuanoPracticePage';
import IlocanoLearnPage from './components/pages/Ilocano/IlocanoLearnPage';
import IlocanoPracticePage from './components/pages/Ilocano/IlocanoPracticePage';
import { TagalogBasicWordsPage, TagalogCommonPhrasePage, TagalogPronouncePage, TagalogExpressionsPage, TagalogCulturalPage, TagalogVerbsTensesPage } from './components/pages/Tagalog/AllLearnTagalogPage';
import { TagalogPronunciationEasyPage, TagalogVocabularyEasyPage, TagalogSentenceEasyPage, TagalogPhraseEasyPage, TagalogTranslationEasyPage } from './components/pages/Tagalog/AllPracticeTagalogPage';
import { BicolanoBasicWordsPage, BicolanoCommonPhrasePage, BicolanoCulturalPage, BicolanoExpressionsPage, BicolanoPronouncePage, BicolanoVerbsTensesPage } from './components/pages/Bicolano/AllLearnBicolanoPage';
import { BicolanoPronunciationEasyPage, BicolanoPhraseEasyPage, BicolanoSentenceEasyPage, BicolanoTranslationEasyPage, BicolanoVocabularyEasyPage } from './components/pages/Bicolano/AllPracticeBicolanoPage';
import { CebuanoBasicWordsPage, CebuanoCommonPhrasePage, CebuanoCulturalPage, CebuanoExpressionsPage, CebuanoPronouncePage, CebuanoVerbsTensesPage } from './components/pages/Cebuano/AllLearnCebuanoPage';
import { CebuanoPronunciationEasyPage, CebuanoPhraseEasyPage, CebuanoSentenceEasyPage, CebuanoTranslationEasyPage, CebuanoVocabularyEasyPage } from './components/pages/Cebuano/AllPracticeCebuanoPage';
import { IlocanoBasicWordsPage, IlocanoCommonPhrasePage, IlocanoCulturalPage, IlocanoExpressionsPage, IlocanoPronouncePage, IlocanoVerbsTensesPage } from './components/pages/Ilocano/AllLearnIlocanoPage';
import { IlocanoPronunciationEasyPage, IlocanoPhraseEasyPage, IlocanoSentenceEasyPage, IlocanoTranslationEasyPage, IlocanoVocabularyEasyPage } from './components/pages/Ilocano/AllPracticeIlocanoPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DialectPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />

          <Route path="/dialectSelector" element={<DialectPage />} />

          <Route path="/tagalogLearn" element={<TagalogLearnPage />} />
          <Route path="/tagalogLearn/basicWords" element={<TagalogBasicWordsPage />} />
          <Route path="/tagalogLearn/commonPhrase" element={<TagalogCommonPhrasePage />} />
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
          <Route path="/bikolLearn/basicWords" element={<BicolanoBasicWordsPage />} />
          <Route path="/bikolLearn/commonPhrase" element={<BicolanoCommonPhrasePage />} />
          <Route path="/bikolLearn/pronounce&sentence" element={<BicolanoPronouncePage />} />
          <Route path="/bikolLearn/verbs&tenses" element={<BicolanoVerbsTensesPage />} />
          <Route path="/bikolLearn/usefulExpressions" element={<BicolanoExpressionsPage />} />
          <Route path="/bikolLearn/cultural" element={<BicolanoCulturalPage />} />
          <Route path="/bikolPractice" element={<BicolanoPracticePage />} />
          <Route path="/bikolPractice/vocabularyChallenge/easy" element={<BicolanoVocabularyEasyPage />} />
          <Route path="/bikolPractice/pronunciationChallenge/easy" element={<BicolanoPronunciationEasyPage />} />
          <Route path="/bikolPractice/sentenceChallenge/easy" element={<BicolanoSentenceEasyPage />} />
          <Route path="/bikolPractice/translationChallenge/easy" element={<BicolanoTranslationEasyPage />} />
          <Route path="/bikolPractice/commonPhrasesChallenge/easy" element={<BicolanoPhraseEasyPage />} />

          <Route path="/cebuanoLearn" element={<CebuanoLearnPage />} />
          <Route path="/cebuanoLearn/basicWords" element={<CebuanoBasicWordsPage />} />
          <Route path="/cebuanoLearn/commonPhrase" element={<CebuanoCommonPhrasePage />} />
          <Route path="/cebuanoLearn/pronounce&sentence" element={<CebuanoPronouncePage />} />
          <Route path="/cebuanoLearn/verbs&tenses" element={<CebuanoVerbsTensesPage />} />
          <Route path="/cebuanoLearn/usefulExpressions" element={<CebuanoExpressionsPage />} />
          <Route path="/cebuanoLearn/cultural" element={<CebuanoCulturalPage />} />
          <Route path="/cebuanoPractice" element={<CebuanoPracticePage />} />
          <Route path="/cebuanoPractice/vocabularyChallenge/easy" element={<CebuanoVocabularyEasyPage />} />
          <Route path="/cebuanoPractice/pronunciationChallenge/easy" element={<CebuanoPronunciationEasyPage />} />
          <Route path="/cebuanoPractice/sentenceChallenge/easy" element={<CebuanoSentenceEasyPage />} />
          <Route path="/cebuanoPractice/translationChallenge/easy" element={<CebuanoTranslationEasyPage />} />
          <Route path="/cebuanoPractice/commonPhrasesChallenge/easy" element={<CebuanoPhraseEasyPage />} />

          <Route path="/ilocanoLearn" element={<IlocanoLearnPage />} />
          <Route path="/ilocanoLearn/basicWords" element={<IlocanoBasicWordsPage />} />
          <Route path="/ilocanoLearn/commonPhrase" element={<IlocanoCommonPhrasePage />} />
          <Route path="/ilocanoLearn/pronounce&sentence" element={<IlocanoPronouncePage />} />
          <Route path="/ilocanoLearn/verbs&tenses" element={<IlocanoVerbsTensesPage />} />
          <Route path="/ilocanoLearn/usefulExpressions" element={<IlocanoExpressionsPage />} />
          <Route path="/ilocanoLearn/cultural" element={<IlocanoCulturalPage />} />
          <Route path="/ilocanoPractice" element={<IlocanoPracticePage />} />
          <Route path="/ilocanoPractice/vocabularyChallenge/easy" element={<IlocanoVocabularyEasyPage />} />
          <Route path="/ilocanoPractice/pronunciationChallenge/easy" element={<IlocanoPronunciationEasyPage />} />
          <Route path="/ilocanoPractice/sentenceChallenge/easy" element={<IlocanoSentenceEasyPage />} />
          <Route path="/ilocanoPractice/translationChallenge/easy" element={<IlocanoTranslationEasyPage />} />
          <Route path="/ilocanoPractice/commonPhrasesChallenge/easy" element={<IlocanoPhraseEasyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
