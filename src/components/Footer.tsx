import { CarFront } from 'lucide-react';

export default function Footer({ onSelectCity }: { onSelectCity: (city: string) => void }) {
    return (
        <footer className="bc-footer">
            <div className="bc-container">
                <div className="bc-footer-main">
                    <div>
                        <a href="#" className="bc-brand bc-brand-light" aria-label="Black Canion, beranda">
                            <span className="bc-brand-mark">
                                <CarFront size={22} strokeWidth={2.2} />
                            </span>
                            <span>
                                BLACK<span className="bc-brand-thin">CANION</span>
                                <small>YOUR JOURNEY, ELEVATED.</small>
                            </span>
                        </a>
                        <p>
                            Lebih dari sekadar tujuan.
                            <br />
                            Temukan kebebasan di setiap perjalanan.
                        </p>
                    </div>

                    <div>
                        <span className="bc-footer-label">JELAJAHI</span>
                        <a href="#armada">Pilihan armada</a>
                        <a href="#cara-sewa">Cara pemesanan</a>
                        <a href="#lokasi">Titik lokasi</a>
                    </div>

                    <div>
                        <span className="bc-footer-label">KOTA LAYANAN</span>
                        {['Jakarta', 'Yogyakarta', 'Bengkulu'].map((city) => (
                            <a
                                key={city}
                                href="#armada"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onSelectCity(city);
                                    document.getElementById('armada')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {city}
                            </a>
                        ))}
                    </div>

                    <div className="bc-footer-note">
                        <span className="bc-footer-label">PERJALANAN ANDA, PRIORITAS KAMI.</span>
                        <p>
                            Pemesanan mudah. Harga transparan.
                            <br />
                            Dikonfirmasi langsung oleh tim kami.
                        </p>
                        <span className="bc-footer-pill">
                            <span />
                            Admin terhubung via WhatsApp
                        </span>
                    </div>
                </div>

                <div className="bc-footer-bottom">
                    <span>© {new Date().getFullYear()} Black Canion. All rights reserved.</span>
                    <a href="#armada">
                        Kredit foto <span className="bc-yellow">↗</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

