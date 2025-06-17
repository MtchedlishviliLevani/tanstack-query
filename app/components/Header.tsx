import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-900 text-white w-full ">
      <nav className="max-w-4xl mx-auto py-4">
        <ul className="flex space-x-10">
          <li>
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors text-[18px] duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-400 transition-colors text-[18px] duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
