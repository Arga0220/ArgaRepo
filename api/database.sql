-- Buat database di phpMyAdmin (XAMPP)
CREATE DATABASE IF NOT EXISTS batik_nova CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE batik_nova;

-- Tabel kategori
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel produk
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  price INT NOT NULL,
  old_price INT DEFAULT NULL,
  category_id INT,
  image VARCHAR(255),
  rating DECIMAL(2,1) DEFAULT 4.5,
  reviews INT DEFAULT 0,
  badge VARCHAR(20) DEFAULT NULL,
  description TEXT,
  sizes VARCHAR(100) DEFAULT 'S,M,L,XL',
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Tabel orders (sederhana)
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(150),
  customer_email VARCHAR(150),
  customer_phone VARCHAR(30),
  address TEXT,
  total INT NOT NULL,
  status ENUM('pending','paid','shipped','completed','cancelled') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  product_id INT,
  product_name VARCHAR(200),
  price INT,
  qty INT,
  size VARCHAR(20),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);

-- Sample data kategori
INSERT INTO categories (name, slug, image) VALUES
('Batik Tulis', 'batik-tulis', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop'),
('Batik Cap', 'batik-cap', 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop'),
('Batik Modern', 'batik-modern', 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&h=300&fit=crop'),
('Kemeja Batik', 'kemeja', 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=300&fit=crop'),
('Dress Batik', 'dress', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop'),
('Sarung & Selendang', 'sarung', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=300&fit=crop');

-- Sample data produk
INSERT INTO products (name, slug, price, old_price, category_id, image, rating, reviews, badge, description, sizes, stock) VALUES
('Batik Tulis Parang Kusumo', 'batik-tulis-parang-kusumo', 450000, 550000, 1, 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=650&fit=crop', 4.9, 128, 'best', 'Batik tulis autentik motif Parang Kusumo dari Yogyakarta.', 'S,M,L,XL', 15),
('Kemeja Batik Modern Geo', 'kemeja-batik-modern-geo', 289000, 349000, 4, 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=650&fit=crop', 4.7, 94, 'sale', 'Kemeja batik modern dengan motif geometris kontemporer.', 'S,M,L,XL,XXL', 32),
('Dress Batik Mega Mendung', 'dress-batik-mega-mendung', 399000, NULL, 5, 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=650&fit=crop', 4.8, 76, NULL, 'Dress elegan motif Mega Mendung khas Cirebon.', 'S,M,L', 18),
('Batik Cap Kawung Classic', 'batik-cap-kawung', 275000, NULL, 2, 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&h=650&fit=crop', 4.6, 112, NULL, 'Batik cap motif Kawung klasik dengan warna earth tone.', 'M,L,XL', 25),
('Blouse Batik Contemp', 'blouse-batik-contemp', 259000, 299000, 3, 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&h=650&fit=crop', 4.5, 63, 'sale', 'Blouse batik kontemporer dengan aksen modern.', 'S,M,L', 22),
('Sarung Batik Solo Premium', 'sarung-batik-solo', 185000, NULL, 6, 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=650&fit=crop', 4.8, 89, NULL, 'Sarung batik Solo dengan motif tradisional.', 'All Size', 40),
('Batik Tulis Sidomukti', 'batik-tulis-sidomukti', 520000, 620000, 1, 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=650&fit=crop&sat=-20', 5.0, 45, 'best', 'Batik tulis motif Sidomukti yang sarat makna filosofis.', 'S,M,L,XL', 8),
('Kemeja Batik Pria Formal', 'kemeja-batik-formal', 319000, NULL, 4, 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=650&fit=crop&sat=-30', 4.7, 101, NULL, 'Kemeja batik pria formal motif klasik.', 'M,L,XL,XXL', 28);
