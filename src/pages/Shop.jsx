import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat') || 'all';
  const [activeCat, setActiveCat] = useState(catParam);

  const filtered = useMemo(() => {
    if (activeCat === 'all') return products;
    return products.filter((p) => p.category === activeCat);
  }, [activeCat]);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Semua Produk</h1>
          <div className="breadcrumb">Home / Shop</div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filters-bar">
            <div className="filter-group">
              <button
                className={`filter-btn ${activeCat === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCat('all')}
              >
                Semua
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={`filter-btn ${activeCat === c.slug ? 'active' : ''}`}
                  onClick={() => setActiveCat(c.slug)}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div style={{ fontSize: 14, color: '#6b7280' }}>
              Menampilkan {filtered.length} produk
            </div>
          </div>

          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, color: '#6b7280' }}>
              Tidak ada produk di kategori ini.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
