import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import SuggestionBot from './pages/SuggestionBot';
import PriceCalculator from './pages/PriceCalculator';
import CreatorsTeam from './components/CreatorsTeam';
import Community from './pages/Community';
import Weather from './pages/Weather';
import LanguageSelector from './components/LanguageSelector';
import Store from './pages/Store';
import AgriPolicies from './pages/AgriPolicies';

export default function App() {
  return (
    <div className="relative">
      <LanguageSelector />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services/*" element={<Services />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="suggestionbot" element={<SuggestionBot />} />
          <Route path="price-calculator" element={<PriceCalculator />} />
          <Route path="community" element={<Community />} />
          <Route path="weather" element={<Weather />} />
          <Route path="store" element={<Store />} />
          <Route path="agri-policies" element={<AgriPolicies />} />
          <Route path="team" element={<CreatorsTeam />} />
        </Route>
      </Routes>
    </div>
  );
}
