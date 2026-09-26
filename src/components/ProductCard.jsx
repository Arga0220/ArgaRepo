import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        {product.badge === 'best' && (
          <span className="product-badge badge-best">Best Seller</span>
        )}
        {product.badge === 'sale' && (
          <span className="product-badge badge-sale">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
        <div className="product-actions">
          <button title="Wishlist"><Heart size={16} /></button>
          <Link to={`/product/${product.slug}`} title="Lihat">
            <button><Eye size={16} /></button>
          </Link>
        </div>
        <button
          className="add-cart-btn"
          onClick={() => onAddToCart?.(product)}
          title="Tambah ke Keranjang"
        >
          <ShoppingBag size={18} />
        </button>
      </div>
      <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="product-price">
          <span className="price-current">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="price-old">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
