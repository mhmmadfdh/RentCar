import { Search, ShieldCheck, CarFront } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            n: '01',
            icon: Search,
            title: 'Temukan mobilmu',
            text: 'Pilih kota, tentukan jadwal, dan temukan armada yang sesuai kebutuhan.',
        },
        {
            n: '02',
            icon: ShieldCheck,
            title: 'Lengkapi pemesanan',
            text: 'Isi nomor WhatsApp, unggah KTP dan SIM, lalu kirim permintaan sewa.',
        },
        {
            n: '03',
            icon: CarFront,
            title: 'Kami hubungi, kamu berangkat',
            text: 'Admin menghubungi via WhatsApp untuk verifikasi, pembayaran, dan konfirmasi perjalanan.',
        },
    ];

    return (
        <section className="bc-container bc-how-section" id="cara-sewa">
            <div className="bc-section-heading">
                <div>
                    <div className="bc-eyebrow">SEDERHANA DARI AWAL</div>
                    <h2>
                        Tiga langkah.
                        <br />
                        Satu perjalanan menyenangkan.
                    </h2>
                </div>
                <p>
                    Lebih sedikit urusan.
                    <br />
                    Lebih banyak waktu untuk perjalanan Anda.
                </p>
            </div>
            <div className="bc-how-grid">
                {steps.map(({ n, icon: Icon, title, text }) => (
                    <article key={n}>
                        <div className="bc-how-top">
                            <span>
                                <Icon size={25} />
                            </span>
                            <b>{n}</b>
                        </div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

