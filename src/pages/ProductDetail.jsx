import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, formatPrice } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [size, setSize] = useState(product?.sizes?.[0] || 'M');
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container" style={{ padding: 80, textAlign: 'center' }}>
        <h2>Produk tidak ditemukan</h2>
        <Link to="/shop" style={{ color: 'var(--primary)', marginTop: 16, display: 'inline-block' }}>
          Kembali ke Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    onAddToCart?.({ ...product, qty, size });
  };

  return (
    <>
      <div className="page-header" style={{ padding: '32px 0' }}>
        <div className="container">
          <div className="breadcrumb">Home / Shop / {product.name}</div>
        </div>
      </div>

      <div className="container">
        <div className="product-detail">
          <div className="detail-images">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="detail-info">
            <h1>{product.name}</h1>
            <div className="product-rating" style={{ marginBottom: 8 }}>
              <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
              <span>({product.reviews} ulasan)</span>
            </div>
            <div className="detail-price">
              {formatPrice(product.price)}
              {product.oldPrice && (
                <span style={{ fontSize: 16, color: '#9ca3af', textDecoration: 'line-through', marginLeft: 12, fontWeight: 400 }}>
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            <p className="detail-desc">{product.description}</p>

            <div style={{ marginBottom: 8, fontWeight: 600, fontSize: 14 }}>Ukuran</div>
            <div className="size-options">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`size-btn ${size === s ? 'active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="qty-add">
              <div className="qty-box">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <button className="btn-add-cart" onClick={handleAdd}>
                Tambah ke Keranjang
              </button>
            </div>

            <div style={{ marginTop: 24, fontSize: 13, color: '#6b7280' }}>
              Stok tersedia: <strong>{product.stock}</strong> pcs
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="section">
            <div className="section-header">
              <h2>Produk Terkait</h2>
            </div>
            <div className="products-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
