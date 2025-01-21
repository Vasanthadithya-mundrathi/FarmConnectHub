import { Outlet } from 'react-router-dom'
import Navigation from '../components/common/Navigation'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} FarmConnectHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
