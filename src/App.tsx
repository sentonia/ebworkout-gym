import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

// ✅ Lazy load non-critical sections
const About = lazy(() => import('./components/About'));
const Programs = lazy(() => import('./components/Programs'));
const Trainers = lazy(() => import('./components/Trainers'));
const Pricing = lazy(() => import('./components/Pricing'));

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <About />
            {/* ✅ Lazy load sections below the fold */}
            <Suspense fallback={<div>Loading...</div>}>
                <Programs />
                <Trainers />
                <Pricing />
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;
