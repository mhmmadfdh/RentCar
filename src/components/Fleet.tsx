import { useState } from 'react';
import { ArrowUpRight, MapPin, Search, SlidersHorizontal, X } from 'lucide-react';
import CarCard from './CarCard';
import { BRANDS, INITIAL_CARS, money, type Car } from '../data/mockData';

type Props = {
    selectedCity: string;
    onResetCity: () => void;
};

export default function Fleet({ selectedCity, onResetCity }: Props) {
    const [transmission, setTransmission] = useState('');
    const [filterOpen, setFilterOpen] = useState(false);
    const [sort, setSort] = useState('recommended');
    const [brand, setBrand] = useState('');
    const [seats, setSeats] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const filteredCars = INITIAL_CARS.filter((car) => {
        if (selectedCity && car.city !== selectedCity) return false;
        if (transmission && car.transmission !== transmission) return false;
        if (brand && car.brand !== brand) return false;
        if (seats) {
            if (seats === '7' && car.seats < 7) return false;
            if (seats !== '7' && car.seats !== parseInt(seats)) return false;
        }
        if (maxPrice && car.daily_rate > parseInt(maxPrice)) return false;
        return true;
    }).sort((a, b) => {
        if (sort === 'price_asc') return a.daily_rate - b.daily_rate;
        if (sort === 'price_desc') return b.daily_rate - a.daily_rate;
        return a.id - b.id;
    });

    const handleReset = () => {
        setTransmission('');
        setBrand('');
        setSeats('');
        setMaxPrice('');
        setSort('recommended');
        onResetCity();
    };

    return (
        <section className="bc-fleet-section" id="armada">
            <div className="bc-container">
                <div className="bc-section-heading">
                    <div>
                        <div className="bc-eyebrow">ARMADA PILIHAN</div>
                        <h2>
                            Mobil yang pas.
                            <br className="bc-mobile-only" /> Untuk setiap rencana.
                        </h2>
                        <p>Dari city car yang lincah hingga kabin lega untuk seluruh keluarga.</p>
                    </div>
                    <span className="bc-result-count">
                        {filteredCars.length} pilihan tersedia <ArrowUpRight size={17} />
                    </span>
                </div>

                <div className="bc-filters">
                    <div className="bc-category-tabs">
                        {[
                            { value: '', label: 'Semua transmisi' },
                            { value: 'AT', label: 'Matic' },
                            { value: 'MT', label: 'Manual' },
                        ].map((item) => (
                            <button
                                key={item.value}
                                className={transmission === item.value ? 'active' : ''}
                                onClick={() => setTransmission(item.value)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className="bc-filter-actions">
                        <button
                            type="button"
                            className={`bc-filter-button ${filterOpen ? 'active' : ''}`}
                            onClick={() => setFilterOpen(!filterOpen)}
                            aria-expanded={filterOpen}
                        >
                            <SlidersHorizontal size={16} />
                            Filter
                        </button>
                        <select
                            aria-label="Urutkan mobil"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                        >
                            <option value="recommended">Rekomendasi</option>
                            <option value="price_asc">Harga terendah</option>
                            <option value="price_desc">Harga tertinggi</option>
                        </select>
                    </div>
                </div>

                {filterOpen && (
                    <div className="bc-expanded-filters">
                        <label className="bc-field">
                            Merek
                            <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                                <option value="">Semua merek</option>
                                {BRANDS.map((b) => (
                                    <option key={b} value={b}>
                                        {b}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="bc-field">
                            Kapasitas
                            <select value={seats} onChange={(e) => setSeats(e.target.value)}>
                                <option value="">Semua kapasitas</option>
                                <option value="4">4 kursi</option>
                                <option value="6">6 kursi</option>
                                <option value="7">7 kursi atau lebih</option>
                            </select>
                        </label>

                        <label className="bc-field">
                            Harga maksimum / hari
                            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                                <option value="">Tanpa batas</option>
                                {[350000, 500000, 750000, 1000000, 2500000].map((price) => (
                                    <option key={price} value={price}>
                                        {money(price)}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <button type="button" className="bc-button" onClick={() => setFilterOpen(false)}>
                            Terapkan filter
                        </button>
                        <button type="button" className="bc-text-button" onClick={handleReset}>
                            <X size={14} />
                            Reset
                        </button>
                    </div>
                )}

                {selectedCity && (
                    <div className="bc-search-context">
                        <MapPin size={14} />
                        {selectedCity}
                        <span>·</span>
                        Semua armada di kota pilihan
                    </div>
                )}

                {filteredCars.length > 0 ? (
                    <div className="bc-car-grid">
                        {filteredCars.map((car: Car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div className="bc-empty">
                        <Search size={34} />
                        <h3>Belum ada mobil yang cocok.</h3>
                        <p>Coba pilih tanggal, lokasi, atau filter lain untuk perjalanan Anda.</p>
                        <button type="button" className="bc-button" onClick={handleReset}>
                            Lihat semua armada
                        </button>
                    </div>
                )}

                <p className="bc-catalog-note">
                    Armada dan tarif saat ini merupakan data contoh untuk pengembangan. Foto merupakan ilustrasi kategori kendaraan.
                </p>
            </div>
        </section>
    );
}

