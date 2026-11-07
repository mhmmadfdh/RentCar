import { useState } from 'react';
import { ArrowLeft, ArrowRight, BusFront, CalendarDays, CarFront, Clock3, MapPin, Truck } from 'lucide-react';
import { CITIES, HERO_SLIDES, getTomorrowDates } from '../data/mockData';

type Props = {
    selectedCity: string;
    onCityChange: (city: string) => void;
    onFilterSubmit: () => void;
};

export default function Hero({ selectedCity, onCityChange, onFilterSubmit }: Props) {
    const [imageIndex, setImageIndex] = useState(0);
    const [vehicleType, setVehicleType] = useState('');
    const dates = getTomorrowDates();
    const [startDate, setStartDate] = useState(dates.starts_at);
    const [endDate, setEndDate] = useState(dates.ends_at);
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('09:00');

    const currentImage = HERO_SLIDES[imageIndex];
    const changeImage = (direction: number) => {
        setImageIndex((prev) => (prev + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilterSubmit();
        const armadaElement = document.getElementById('armada');
        armadaElement?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="bc-reference-hero" aria-label="Premium rental service">
            <div className="bc-reference-gold" aria-hidden="true" />
            <div className="bc-reference-copy">
                <h1>
                    Premium
                    <br />
                    <span>Rental</span> Service
                </h1>
                <p>You can book the service below.</p>
                <div className="bc-reference-types" aria-label="Jenis kendaraan">
                    {[
                        { value: '', label: 'Car', icon: CarFront },
                        { value: 'suv', label: 'SUV', icon: Truck },
                        { value: 'minivan', label: 'Mini Van', icon: BusFront },
                    ].map(({ value, label, icon: Icon }) => (
                        <button
                            key={value}
                            type="button"
                            aria-pressed={vehicleType === value}
                            className={vehicleType === value ? 'active' : ''}
                            onClick={() => setVehicleType(value)}
                        >
                            <Icon size={24} strokeWidth={1.2} />
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <img
                className={`bc-reference-car ${currentImage.cutout ? '' : 'bc-reference-car-photo'}`}
                src={currentImage.src}
                alt={currentImage.alt}
                fetchPriority="high"
            />

            <div className="bc-hero-slider-controls" role="group" aria-label="Navigasi gambar mobil">
                <button type="button" aria-label="Gambar mobil sebelumnya" onClick={() => changeImage(-1)}>
                    <ArrowLeft size={18} />
                </button>
                <span aria-live="polite" aria-atomic="true">
                    {imageIndex + 1} / {HERO_SLIDES.length}
                </span>
                <button type="button" aria-label="Gambar mobil berikutnya" onClick={() => changeImage(1)}>
                    <ArrowRight size={18} />
                </button>
            </div>

            <div className="bc-reference-booking">
                <div className="bc-reference-stages" aria-label="Tahapan pemesanan">
                    <span className="active">
                        <i />
                        Ride Details
                    </span>
                    <span>
                        <i />
                        Quote
                    </span>
                    <span>
                        <i />
                        Checkout
                    </span>
                </div>

                <form className="bc-reference-search" onSubmit={handleSubmit}>
                    <div className="bc-reference-search-item bc-reference-pickup">
                        <MapPin size={19} strokeWidth={1.5} />
                        <label>
                            <span>Pick-up Location</span>
                            <select
                                aria-label="Lokasi pengambilan"
                                value={selectedCity}
                                onChange={(e) => onCityChange(e.target.value)}
                            >
                                <option value="">Where are you?</option>
                                {CITIES.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="bc-reference-search-item bc-reference-dropoff">
                        <MapPin size={19} strokeWidth={1.5} />
                        <div>
                            <span>Drop-off Location</span>
                            <small>{selectedCity || 'Same as pick-up'}</small>
                        </div>
                    </div>

                    <div className="bc-reference-search-item bc-reference-dates">
                        <CalendarDays size={18} strokeWidth={1.5} />
                        <div>
                            <div className="bc-reference-input-pair">
                                <input
                                    type="date"
                                    required
                                    aria-label="Tanggal mulai sewa"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                                <span>–</span>
                                <input
                                    type="date"
                                    required
                                    min={startDate}
                                    aria-label="Tanggal selesai sewa"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                            <small>Pick up - Drop off</small>
                        </div>
                    </div>

                    <div className="bc-reference-search-item bc-reference-times">
                        <Clock3 size={18} strokeWidth={1.5} />
                        <div>
                            <div className="bc-reference-input-pair">
                                <input
                                    type="time"
                                    required
                                    aria-label="Waktu mulai sewa"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                />
                                <span>|</span>
                                <input
                                    type="time"
                                    required
                                    aria-label="Waktu selesai sewa"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                            </div>
                            <small>Pick up - Drop off</small>
                        </div>
                    </div>

                    <button type="submit" className="bc-reference-submit">
                        Temukan armada
                    </button>
                </form>
            </div>
        </section>
    );
}

