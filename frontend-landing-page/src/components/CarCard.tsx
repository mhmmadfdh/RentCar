import { ArrowUpRight, BriefcaseBusiness, MapPin, Settings2, Users } from 'lucide-react';
import { money, type Car } from '../data/mockData';

export default function CarCard({ car }: { car: Car }) {
    return (
        <article className="bc-car-card">
            <a href="#armada" className="bc-car-photo">
                <img src={car.image} alt={`Ilustrasi kategori ${car.category}`} loading="lazy" />
                <span className="bc-car-category">{car.category}</span>
                <span className="bc-photo-caption">Foto ilustrasi</span>
            </a>
            <div className="bc-car-content">
                <div className="bc-car-location">
                    <MapPin size={13} />
                    {car.city}
                    <span>•</span>Lepas kunci
                </div>
                <a href="#armada">
                    <h3>{car.name}</h3>
                </a>
                <div className="bc-car-specs">
                    <span>
                        <Users size={15} />
                        {car.seats} kursi
                    </span>
                    <span>
                        <Settings2 size={15} />
                        {car.transmission === 'AT' ? 'Matic' : 'Manual'}
                    </span>
                    <span>
                        <BriefcaseBusiness size={15} />
                        {car.bags} bagasi
                    </span>
                </div>
                <div className="bc-car-bottom">
                    <div>
                        <small>Mulai dari</small>
                        <strong>
                            {money(car.daily_rate)}
                            <span> / hari</span>
                        </strong>
                    </div>
                    <a href="#armada" className="bc-card-arrow" aria-label={`Lihat detail ${car.name}`}>
                        <ArrowUpRight size={21} />
                    </a>
                </div>
            </div>
        </article>
    );
}

