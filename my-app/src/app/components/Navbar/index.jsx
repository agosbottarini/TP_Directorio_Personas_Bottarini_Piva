import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
        <li>
          <Link href="/estadisticas">Estadisticas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;