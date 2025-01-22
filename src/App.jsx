import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Login from './pages/Login'
import Register from './pages/Register'
import SuggestionBot from './pages/SuggestionBot'
import PriceCalculator from './pages/PriceCalculator';
import CreatorsTeam from './components/CreatorsTeam'
import FarmingInstructions from './components/services/FarmingInstructions'
import SeasonalCrops from './components/services/SeasonalCrops'
import TechAwareness from './components/services/TechAwareness'
import Rentals from './components/services/Rentals'
import Documentation from './components/services/Documentation'
import FertilizerPesticides from './components/services/FertilizerPesticides'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<CreatorsTeam />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="suggestionbot" element={<SuggestionBot />} />
        <Route path="price-calculator" element={<PriceCalculator />} />
        
        {/* Service Routes */}
        <Route path="services/farming-instructions" element={<FarmingInstructions />} />
        <Route path="services/seasonal-crops" element={<SeasonalCrops />} />
        <Route path="services/tech-awareness" element={<TechAwareness />} />
        <Route path="services/rentals/*" element={<Rentals />} />
        <Route path="services/documentation" element={<Documentation />} />
        <Route path="services/fertilizer-pesticides" element={<FertilizerPesticides />} />
      </Route>
    </Routes>
  )
}
