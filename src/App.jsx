import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FamilyStatus from './pages/service-pages/FamilyStatus'
import CriminalDefense from './pages/service-pages/CriminalDefense'
import LabourLaw from './pages/service-pages/LabourLaw'
import CorporateCommercial from './pages/service-pages/CorporateCommercial'
import BankingFinance from './pages/service-pages/BankingFinance'
import MedicalMalpractice from './pages/service-pages/MedicalMalpractice'
import LitigationStages from './pages/service-pages/LitigationStages'
import Team from './pages/Team'
import TeamMember from './pages/team/TeamMember'
import Privacy from './pages/legal/Privacy'
import Terms from './pages/legal/Terms'
import Disclaimer from './pages/legal/Disclaimer'
import Cookies from './pages/legal/Cookies'
import News from './pages/News'
import NewsArticle from './pages/NewsArticle'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/family-status" element={<FamilyStatus />} />
        <Route path="/services/criminal-defense" element={<CriminalDefense />} />
        <Route path="/services/labour-law" element={<LabourLaw />} />
        <Route path="/services/corporate-commercial" element={<CorporateCommercial />} />
        <Route path="/services/banking-finance" element={<BankingFinance />} />
        <Route path="/services/medical-malpractice" element={<MedicalMalpractice />} />
        <Route path="/services/litigation-stages" element={<LitigationStages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamMember />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
      </Routes>
      <Footer />
      <FloatingButtons />
    </>
  )
}
