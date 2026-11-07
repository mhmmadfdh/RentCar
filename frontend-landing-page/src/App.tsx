import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Fleet from './components/Fleet';
import HowItWorks from './components/HowItWorks';
import Destinations from './components/Destinations';
import Journal from './components/Journal';
import LocationMap from './components/LocationMap';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
    const [selectedCity, setSelectedCity] = useState('');

    return (
        <div className="bc-app bc-reference-home">
            <Header />
            <main>
                <Hero
                    selectedCity={selectedCity}
                    onCityChange={setSelectedCity}
                    onFilterSubmit={() => {}}
                />
                <Benefits />
                <Fleet
                    selectedCity={selectedCity}
                    onResetCity={() => setSelectedCity('')}
                />
                <HowItWorks />
                <Destinations onSelectCity={setSelectedCity} />
                <Journal />
                <LocationMap />
                <Cta />
            </main>
            <Footer onSelectCity={setSelectedCity} />
        </div>
    );
}

