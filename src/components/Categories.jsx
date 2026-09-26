import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function Categories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Jelajahi Koleksi Teratas</h2>
          <p>Pilih dari berbagai macam batik premium & luxury</p>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link to={`/shop?cat=${cat.slug}`} className="category-card" key={cat.id}>
              <img src={cat.image} alt={cat.name} className="category-img" />
              <h4>{cat.name}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
