import { JOURNAL_POSTS } from '../data/mockData';

export default function Journal() {
    return (
        <section className="bc-reference-blog" id="panduan">
            <span className="bc-eyebrow">THE BLACK CANYON JOURNAL</span>
            <h2>Perjalanan nyaman dimulai dari persiapan.</h2>
            <div className="bc-reference-blog-grid">
                {JOURNAL_POSTS.map((post) => (
                    <article key={post.num}>
                        <span>{post.num}</span>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

