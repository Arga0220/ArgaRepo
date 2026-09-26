import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { formatPrice } from '../data/products';

export default function CartSidebar({ open, onClose, cart, onUpdateQty, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={`cart-overlay ${open ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-sidebar ${open ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Keranjang ({cart.length})</h3>
          <button onClick={onClose}><X size={22} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Keranjang masih kosong</p>
              <p style={{ fontSize: 13, marginTop: 8 }}>Yuk belanja batik favoritmu!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <div className="price">{formatPrice(item.price)}</div>
                  <div className="qty-control">
                    <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>
                      <Plus size={14} />
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      style={{ marginLeft: 8, color: '#ef4444' }}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button className="btn-checkout">Checkout Sekarang</button>
          </div>
        )}
      </div>
    </>
  );
}
