import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/transactions">
            <a>Transactions</a>
          </Link>
        </li>
        <li>
          <Link href="/budget">
            <a>Budget</a>
          </Link>
        </li>
        <li>
          <Link href="/reports">
            <a>Reports</a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
