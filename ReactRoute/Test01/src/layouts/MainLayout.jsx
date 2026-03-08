import { Outlet, Link, NavLink } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#333', padding: '20px' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#61dafb' : '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/user"
            style={({ isActive }) => ({
              color: isActive ? '#61dafb' : '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            User
          </NavLink>
          <NavLink
            to="/guest"
            style={({ isActive }) => ({
              color: isActive ? '#61dafb' : '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            Guest
          </NavLink>
          <NavLink
            to="/product"
            style={({ isActive }) => ({
              color: isActive ? '#61dafb' : '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: isActive ? 'bold' : 'normal',
              transition: 'all 0.3s'
            })}
          >
            Product
          </NavLink>
        </nav>
      </header>

      {/* Main Content - Outlet */}
      <main style={{ flex: 1, padding: '30px', backgroundColor: '#f5f5f5' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}
