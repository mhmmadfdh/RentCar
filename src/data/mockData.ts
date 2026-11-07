export type Car = {
    id: number;
    slug: string;
    name: string;
    brand: string;
    category: string;
    city: string;
    transmission: 'AT' | 'MT';
    seats: number;
    bags: number;
    engine: string;
    fuel: string;
    daily_rate: number;
    image: string;
    description: string;
    features: string[];
};

export const CITIES = ['Jakarta', 'Yogyakarta', 'Bengkulu'];
export const BRANDS = ['Toyota', 'Honda', 'Mitsubishi'];

export const INITIAL_CARS: Car[] = [
    {
        id: 1,
        slug: 'toyota-avanza-jakarta',
        name: 'Toyota Avanza',
        brand: 'Toyota',
        category: 'MPV',
        city: 'Jakarta',
        transmission: 'AT',
        seats: 7,
        bags: 3,
        engine: '1.5 L',
        fuel: 'Bensin',
        daily_rate: 350000,
        image: './images/avanza.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Jakarta. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 2,
        slug: 'toyota-innova-jakarta',
        name: 'Toyota Innova Zenix',
        brand: 'Toyota',
        category: 'Premium MPV',
        city: 'Jakarta',
        transmission: 'AT',
        seats: 7,
        bags: 4,
        engine: '2.0 L Hybrid',
        fuel: 'Hybrid',
        daily_rate: 750000,
        image: './images/innova.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Jakarta. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 3,
        slug: 'honda-brio-yogyakarta',
        name: 'Honda Brio',
        brand: 'Honda',
        category: 'City Car',
        city: 'Yogyakarta',
        transmission: 'AT',
        seats: 4,
        bags: 2,
        engine: '1.2 L',
        fuel: 'Bensin',
        daily_rate: 275000,
        image: './images/brio.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Yogyakarta. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 4,
        slug: 'toyota-rush-bengkulu',
        name: 'Toyota Rush',
        brand: 'Toyota',
        category: 'SUV',
        city: 'Bengkulu',
        transmission: 'MT',
        seats: 7,
        bags: 3,
        engine: '1.5 L',
        fuel: 'Bensin',
        daily_rate: 400000,
        image: './images/rush.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Bengkulu. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 5,
        slug: 'mitsubishi-xpander-yogyakarta',
        name: 'Mitsubishi Xpander',
        brand: 'Mitsubishi',
        category: 'MPV',
        city: 'Yogyakarta',
        transmission: 'AT',
        seats: 7,
        bags: 3,
        engine: '1.5 L',
        fuel: 'Bensin',
        daily_rate: 425000,
        image: './images/xpander.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Yogyakarta. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 6,
        slug: 'honda-hrv-jakarta',
        name: 'Honda HR-V',
        brand: 'Honda',
        category: 'SUV',
        city: 'Jakarta',
        transmission: 'AT',
        seats: 5,
        bags: 3,
        engine: '1.5 L',
        fuel: 'Bensin',
        daily_rate: 600000,
        image: './images/hrv.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Jakarta. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 7,
        slug: 'toyota-avanza-bengkulu',
        name: 'Toyota Avanza',
        brand: 'Toyota',
        category: 'MPV',
        city: 'Bengkulu',
        transmission: 'MT',
        seats: 7,
        bags: 3,
        engine: '1.5 L',
        fuel: 'Bensin',
        daily_rate: 325000,
        image: './images/avanza.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Bengkulu. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    },
    {
        id: 8,
        slug: 'toyota-alphard-jakarta',
        name: 'Toyota Alphard',
        brand: 'Toyota',
        category: 'Luxury',
        city: 'Jakarta',
        transmission: 'AT',
        seats: 6,
        bags: 4,
        engine: '2.5 L Hybrid',
        fuel: 'Hybrid',
        daily_rate: 2500000,
        image: './images/alphard.jpg',
        description: 'Pilihan nyaman untuk perjalanan di Jakarta. Kabin lega, AC sejuk, dan ruang bagasi untuk kebutuhan perjalanan Anda.',
        features: ['AC', 'Bluetooth audio', 'USB charger', 'Airbag', 'Sabuk pengaman']
    }
];

export const HERO_SLIDES = [
    { src: './images/premium-sedan.png', alt: 'Sedan hitam premium, ilustrasi layanan Black Canion', cutout: true },
    { src: './images/alphard.jpg', alt: 'Toyota Alphard, foto ilustrasi kendaraan premium', cutout: false },
    { src: './images/innova.jpg', alt: 'Toyota Innova Zenix, foto ilustrasi mobil keluarga', cutout: false },
    { src: './images/hrv.jpg', alt: 'Honda HR-V, foto ilustrasi SUV', cutout: false }
];

export const DESTINATIONS = [
    { city: 'Jakarta', image: './images/jakarta.jpg', text: 'Untuk ritme kota yang tak berhenti.' },
    { city: 'Yogyakarta', image: './images/yogyakarta.jpg', text: 'Pelan-pelan, temukan cerita baru.' },
    { city: 'Bengkulu', image: './images/bengkulu.jpg', text: 'Jalan pesisir dan kebebasan baru.' }
];

export const JOURNAL_POSTS = [
    {
        num: '01 / PILIH ARMADA',
        title: 'Mobil yang tepat untuk rencana Anda.',
        text: 'Perhatikan jumlah penumpang, kapasitas bagasi, dan transmisi. Gunakan filter armada untuk memilih mobil yang sesuai.'
    },
    {
        num: '02 / SEBELUM BERANGKAT',
        title: 'Siapkan dokumen, nikmati perjalanan.',
        text: 'Unggah foto KTP dan SIM A yang jelas saat memesan. Bawa dokumen asli ketika mengambil kendaraan.'
    },
    {
        num: '03 / RENCANAKAN JADWAL',
        title: 'Kenali waktu dan rincian sewa.',
        text: 'Sewa dihitung per 24 jam dan dibulatkan ke hari berikutnya. Koordinasikan lokasi pengambilan dan pembayaran dengan admin melalui WhatsApp.'
    }
];

export const money = (value: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

export function getTomorrowDates() {
    const format = (offset: number) => {
        const date = new Date(Date.now() + offset * 86400000);
        return date.toISOString().slice(0, 10);
    };
    return { starts_at: format(1), ends_at: format(2) };
}

