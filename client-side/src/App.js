import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/page/LoginRegisterPage';
import DialectPage from './components/page/DialectPage';
import TagalogPage from './components/page/Tagalogpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DialectPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/tagalog" element={<TagalogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
