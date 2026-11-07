import { useState } from 'react';
import { Menu, X, CarFront } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bc-header">
            <div className="bc-container bc-nav">
                <a href="#" className="bc-brand bc-brand-light" aria-label="Black Canion, beranda">
                    <span className="bc-brand-mark">
                        <CarFront size={22} strokeWidth={2.2} />
                    </span>
                    <span>
                        BLACK<span className="bc-brand-thin">CANION</span>
                        <small>YOUR JOURNEY, ELEVATED.</small>
                    </span>
                </a>

                <nav className="bc-desktop-nav" aria-label="Navigasi utama">
                    <a href="#" className="bc-nav-active">Home</a>
                    <a href="#armada">Fleet</a>
                    <a href="#cara-sewa">Services</a>
                    <a href="#destinasi">Areas we serve</a>
                    <a href="#panduan">Blog</a>
                    <a href="#lokasi">Contact</a>
                </nav>

                <div className="bc-nav-actions">
                    <a href="#armada" className="bc-reference-register">
                        Register
                    </a>
                    <span className="bc-reference-nav-divider" aria-hidden="true">|</span>
                    <a href="#armada" className="bc-button bc-button-small">
                        Sign In
                    </a>
                    <button
                        className="bc-menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav className="bc-mobile-nav">
                    <a href="#armada" onClick={() => setMenuOpen(false)}>Armada</a>
                    <a href="#cara-sewa" onClick={() => setMenuOpen(false)}>Cara sewa</a>
                    <a href="#destinasi" onClick={() => setMenuOpen(false)}>Destinasi</a>
                    <a href="#panduan" onClick={() => setMenuOpen(false)}>Panduan</a>
                    <a href="#lokasi" onClick={() => setMenuOpen(false)}>Lokasi</a>
                </nav>
            )}
        </header>
    );
}

