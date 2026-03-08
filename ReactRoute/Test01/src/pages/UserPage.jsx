export default function UserPage() {
  return (
    <div>
      <h1>User Management</h1>
      <p>Đây là trang quản lý người dùng.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>1</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>John Doe</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>john@example.com</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>2</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>Jane Smith</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>jane@example.com</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>3</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>Bob Johnson</td>
            <td style={{ border: '1px solid #ccc', padding: '10px' }}>bob@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
