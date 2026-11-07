import { ShieldCheck, Clock3, Headphones } from 'lucide-react';

export default function Benefits() {
    return (
        <section className="bc-container bc-benefits">
            <div>
                <ShieldCheck size={28} />
                <span>
                    <strong>Harga jelas di awal</strong>
                    <small>Rincian biaya sebelum Anda memesan.</small>
                </span>
            </div>
            <div>
                <Clock3 size={28} />
                <span>
                    <strong>Pesan tanpa ribet</strong>
                    <small>Pilih mobil, isi data, kami hubungi Anda.</small>
                </span>
            </div>
            <div>
                <Headphones size={28} />
                <span>
                    <strong>Manusia, bukan sekadar sistem</strong>
                    <small>Konfirmasi personal melalui WhatsApp.</small>
                </span>
            </div>
        </section>
    );
}

