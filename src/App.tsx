import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PedagogyPage } from './pages/PedagogyPage';
import { GroupsPage } from './pages/GroupsPage';
import { GroupDetailPage } from './pages/GroupDetailPage';
import { TeamPage } from './pages/TeamPage';
import { EnrollmentPage } from './pages/EnrollmentPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ROUTES } from './routes';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path={ROUTES.home} element={<HomePage />} />
              <Route path={ROUTES.about} element={<AboutPage />} />
              <Route path={ROUTES.pedagogy} element={<PedagogyPage />} />
              <Route path={ROUTES.groups} element={<GroupsPage />} />
              <Route path="/gruppen/:slug" element={<GroupDetailPage />} />
              <Route path={ROUTES.team} element={<TeamPage />} />
              <Route path={ROUTES.enrollment} element={<EnrollmentPage />} />
              <Route path={ROUTES.news} element={<NewsPage />} />
              <Route path="/aktuelles/:slug" element={<NewsDetailPage />} />
              <Route path={ROUTES.contact} element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
