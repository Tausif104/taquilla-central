import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'
import TicketListPage from './pages/TicketListPage'
import CustomerDetailsPage from './pages/CustomerDetailsPage'
import ThankYouPage from './pages/ThankYouPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ticket-list' element={<TicketListPage />} />
          <Route path='/customer-details' element={<CustomerDetailsPage />} />
          <Route path='/thank-you' element={<ThankYouPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
