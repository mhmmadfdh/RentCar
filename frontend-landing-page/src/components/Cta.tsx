import { ArrowRight, Sparkles } from 'lucide-react';

export default function Cta() {
    return (
        <section className="bc-container bc-bottom-cta">
            <div>
                <span className="bc-eyebrow">
                    <Sparkles size={14} />
                    READY FOR YOUR NEXT JOURNEY?
                </span>
                <h2>
                    Rencana sudah ada?
                    <br />
                    Mobilnya, biar kami bantu.
                </h2>
            </div>
            <a href="#armada" className="bc-button">
                Temukan mobil saya <ArrowRight size={18} />
            </a>
        </section>
    );
}

