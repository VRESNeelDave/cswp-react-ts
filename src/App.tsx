import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Appbar';
import HomePage from './pages/Home'
import DatasetPage from './pages/Dataset';
import ModelVisualisationPage from './pages/ModelVisualisation'
import CitationPage from './pages/Citation';
import DownloadPage from './pages/Download';
import ExamplesPage from './pages/Examples';

function App() {
  return (
    <Router basename="/hotformerloc">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dataset" element={<DatasetPage />} />
        <Route path="/models" element={<ModelVisualisationPage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/citation" element={<CitationPage />} />
      </Routes>
      <Navigation />
    </Router>
  )
}
export default App
