export default function ProductPage() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', category: 'Electronics' },
    { id: 2, name: 'Phone', price: '$699', category: 'Electronics' },
    { id: 3, name: 'Book', price: '$20', category: 'Books' },
    { id: 4, name: 'Headphones', price: '$199', category: 'Electronics' },
    { id: 5, name: 'Mouse', price: '$50', category: 'Accessories' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <p>Danh sách các sản phẩm có sẵn.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s'
          }}>
            <h3>{product.name}</h3>
            <p style={{ color: '#666' }}>Category: {product.category}</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#27ae60' }}>{product.price}</p>
            <button style={{
              backgroundColor: '#3498db',
              color: '#fff',
              border: 'none',
              padding: '8px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
