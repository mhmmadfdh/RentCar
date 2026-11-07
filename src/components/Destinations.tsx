import { ArrowUpRight } from 'lucide-react';
import { DESTINATIONS } from '../data/mockData';

type Props = {
    onSelectCity: (city: string) => void;
};

export default function Destinations({ onSelectCity }: Props) {
    const handleCityClick = (city: string) => {
        onSelectCity(city);
        const armada = document.getElementById('armada');
        armada?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="bc-destinations" id="destinasi">
            <div className="bc-container">
                <div className="bc-section-heading">
                    <div>
                        <div className="bc-eyebrow">KOTA PILIHAN, CERITA BERBEDA</div>
                        <h2>Ke mana cerita berikutnya?</h2>
                        <p>Tiga kota. Banyak kemungkinan. Semuanya dimulai dari sini.</p>
                    </div>
                </div>
                <div className="bc-destination-grid">
                    {DESTINATIONS.map(({ city, image, text }) => (
                        <div
                            key={city}
                            onClick={() => handleCityClick(city)}
                            className="bc-destination"
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={image} alt={`Ilustrasi destinasi ${city}`} loading="lazy" />
                            <div>
                                <span>JELAJAHI</span>
                                <h3>{city}</h3>
                                <p>{text}</p>
                            </div>
                            <span className="bc-destination-arrow">
                                <ArrowUpRight size={21} />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

