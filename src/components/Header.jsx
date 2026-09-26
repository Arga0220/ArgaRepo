import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X, Phone } from 'lucide-react';

export default function Header({ cartCount = 0, onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span><Phone size={12} /> +62 812-3456-7890</span>
          </div>
          <div className="top-bar-center">
            GRATIS ONGKIR SELURUH INDONESIA • JANGAN LEWATKAN KESEMPATAN INI
          </div>
          <div className="top-bar-right">
            <div className="lang-currency">
              <select defaultValue="id">
                <option value="id">🇮🇩 ID</option>
                <option value="en">🇬🇧 EN</option>
              </select>
              <select defaultValue="idr">
                <option value="idr">IDR</option>
                <option value="usd">USD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container header-inner">
          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="logo">
            Pusaka<span>Batik</span>
          </Link>

          <nav className="nav">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/shop" className={`has-dropdown ${isActive('/shop')}`}>Shop</Link>
            <Link to="/shop" className="has-dropdown">Produk</Link>
            <Link to="/shop?cat=batik-tulis">Koleksi</Link>
            <Link to="/shop">Blog</Link>
          </nav>

          <div className="header-actions">
            <button aria-label="Search"><Search size={20} /></button>
            <button aria-label="Account"><User size={20} /></button>
            <button aria-label="Wishlist">
              <Heart size={20} />
              <span className="badge">0</span>
            </button>
            <button aria-label="Cart" onClick={onCartOpen}>
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div style={{
            background: '#fff',
            padding: '16px 20px',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Produk</Link>
            <Link to="/shop" onClick={() => setMobileOpen(false)}>Koleksi</Link>
          </div>
        )}
      </header>
    </>
  );
}
