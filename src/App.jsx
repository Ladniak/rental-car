import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import CarPage from './pages/CarPage/CarPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
