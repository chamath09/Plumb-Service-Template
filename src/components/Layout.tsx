import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import MobileStickyCall from './MobileStickyCall';
import Chatbot from './Chatbot';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} className="h-full">
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Chatbot />
      <MobileStickyCall />
    </div>
  );
}
