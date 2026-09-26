import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home({ onAddToCart }) {
  const topSellers = products.slice(0, 4);

  return (
    <>
      <Hero />
      <TrustBadges />
      <Categories />

      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="section-header">
            <h2>Weekly Top Sellers</h2>
            <p>Belanja item paling populer yang sedang trending</p>
          </div>
          <div className="products-grid">
            {topSellers.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
          <div className="view-all-wrap">
            <Link to="/shop" className="btn-view-all">
              Lihat Semua Produk <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
