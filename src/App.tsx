import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SiteFooter, SiteHeader } from './components/SiteShell'
import { ToastProvider } from './components/Toast'
import { AuthPage, DashboardPage, HomePage, MembershipPage, ProductsPage } from './pages/Pages'

function NotFound() {
  return <main className="page-enter flex min-h-[60vh] flex-col items-center justify-center px-5 text-center"><p className="mb-4 text-[10px] uppercase tracking-[.2em] text-[#998665]">A small wrong turn</p><h1 className="font-display text-[54px] text-[#342e27]">Not found.</h1><p className="mt-3 text-[13px] text-[#80776b]">This page is not part of the collection.</p><Link to="/" className="focus-ring mt-7 inline-flex items-center gap-2 text-[11px] text-[#806d4e]"><ArrowLeft size={14} /> Return home</Link></main>
}

function App() {
  const location = useLocation()
  return (
    <ToastProvider>
      <div className="min-h-[100dvh]">
        <SiteHeader />
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/login" element={<AuthPage mode="login" />} />
            <Route path="/register" element={<AuthPage mode="register" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <SiteFooter />
      </div>
    </ToastProvider>
  )
}

export default App
