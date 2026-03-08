export default function GuestPage() {
  return (
    <div>
      <h1>Guest Page</h1>
      <p>Đây là trang dành cho khách truy cập.</p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
        <h3>Thông Tin Khách</h3>
        <p>Khách truy cập có thể xem nội dung công khai mà không cần đăng nhập.</p>
        <ul>
          <li>Xem danh sách sản phẩm</li>
          <li>Tìm kiếm sản phẩm</li>
          <li>Xem chi tiết sản phẩm</li>
        </ul>
      </div>
    </div>
  );
}
