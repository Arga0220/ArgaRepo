import { Truck, ShieldCheck, Headphones, CreditCard } from 'lucide-react';

const badges = [
  { icon: Truck, title: 'Gratis Ongkir & Return', desc: 'Gratis ongkir seluruh Indonesia' },
  { icon: ShieldCheck, title: 'Garansi Uang Kembali', desc: 'Dukungan 24/7 setiap hari' },
  { icon: Headphones, title: 'Online Support', desc: 'Kami siap membantu 24/7' },
  { icon: CreditCard, title: 'Pembayaran Aman', desc: 'Transaksi aman & terpercaya' },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges">
      <div className="container">
        <div className="trust-grid">
          {badges.map((b, i) => (
            <div className="trust-item" key={i}>
              <div className="trust-icon">
                <b.icon size={22} />
              </div>
              <div className="trust-text">
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
