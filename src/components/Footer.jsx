import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Pusaka<span>Batik</span></div>
            <p>
              Toko batik online premium yang menghadirkan keindahan warisan budaya Indonesia
              dengan sentuhan modern. Setiap kain adalah karya seni yang layak dikenakan.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Youtube"><Youtube size={18} /></a>
            </div>
          </div>
          <div>
            <h4>Belanja</h4>
            <ul>
              <li><Link to="/shop">Semua Produk</Link></li>
              <li><Link to="/shop?cat=batik-tulis">Batik Tulis</Link></li>
              <li><Link to="/shop?cat=batik-cap">Batik Cap</Link></li>
              <li><Link to="/shop?cat=kemeja">Kemeja Batik</Link></li>
              <li><Link to="/shop?cat=dress">Dress Batik</Link></li>
            </ul>
          </div>
          <div>
            <h4>Bantuan</h4>
            <ul>
              <li><a href="#">Cara Belanja</a></li>
              <li><a href="#">Pengiriman</a></li>
              <li><a href="#">Return & Refund</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Hubungi Kami</a></li>
            </ul>
          </div>
          <div>
            <h4>Perusahaan</h4>
            <ul>
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#">Karir</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Kebijakan Privasi</a></li>
              <li><a href="#">Syarat & Ketentuan</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Pusaka Batik. All rights reserved.</p>
          <p>Dibuat dengan ❤️ untuk budaya Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
