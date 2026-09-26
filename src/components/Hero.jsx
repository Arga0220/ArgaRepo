import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">BEST SELLER SEJAK 2010</span>
          <h1>
            Kenakan Batik,<br />
            <span>Tampil Trendy</span>
          </h1>
          <p>Dapatkan diskon 20% untuk koleksi batik premium terbaru kami</p>
          <Link to="/shop" className="btn btn-primary">
            Jelajahi Sekarang <ArrowRight size={18} />
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="public/images/kemeja.jfif"
            alt="Model Batik Premium"
          />
        </div>
      </div>
      <div className="hero-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
