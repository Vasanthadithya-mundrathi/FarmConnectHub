import { Routes, Route } from 'react-router-dom'
import ToolRental from './rentals/ToolRental'
import TractorRental from './rentals/TractorRental'
import HarvesterRental from './rentals/HarvesterRental'
import SoilCheck from './rentals/SoilCheck'
import SprinklerRental from './rentals/SprinklerRental'
import ColdStorage from './rentals/ColdStorage'
import SeederRental from './rentals/SeederRental'

export default function Rentals() {
  return (
    <Routes>
      <Route path="tools" element={<ToolRental />} />
      <Route path="tractor" element={<TractorRental />} />
      <Route path="harvester" element={<HarvesterRental />} />
      <Route path="soil-check" element={<SoilCheck />} />
      <Route path="sprinkler" element={<SprinklerRental />} />
      <Route path="storage" element={<ColdStorage />} />
      <Route path="seeder" element={<SeederRental />} />
    </Routes>
  )
}
