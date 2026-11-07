import { ArrowUpRight, MapPin } from 'lucide-react';

export default function LocationMap() {
    return (
        <section className="bc-container bc-map-section" id="lokasi">
            <div className="bc-map-info">
                <span className="bc-eyebrow">TEMUKAN TITIK PERJALANAN ANDA</span>
                <h2>
                    Lebih dekat.
                    <br />
                    Lebih mudah berangkat.
                </h2>
                <p>Lihat titik lokasi di peta dan rencanakan perjalanan Anda sebelum berangkat.</p>
                <div className="bc-map-address">
                    <span className="bc-map-pin">
                        <MapPin size={22} />
                    </span>
                    <div>
                        <strong>Monas, Jakarta</strong>
                        <span>Jakarta Pusat, DKI Jakarta</span>
                    </div>
                    <small>Lokasi contoh</small>
                </div>
                <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Monas%2C%20Jakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bc-button"
                >
                    Buka petunjuk arah <ArrowUpRight size={18} />
                </a>
                <p className="bc-helper">
                    Titik ini sementara untuk contoh peta, bukan alamat rental. Lokasi pengambilan sebenarnya dikonfirmasi admin melalui WhatsApp.
                </p>
            </div>
            <div className="bc-map-frame">
                <iframe
                    title="Peta lokasi contoh Black Canyon — Monas, Jakarta"
                    src="https://maps.google.com/maps?q=Monas%2C%20Jakarta&z=14&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
                <a
                    href="https://www.google.com/maps/search/?api=1&query=Monas%2C%20Jakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bc-map-open"
                >
                    Lihat di Google Maps <ArrowUpRight size={14} />
                </a>
            </div>
        </section>
    );
}

