'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Posts', path: '/posts' },
    { name: 'Albums', path: '/albums' },
  ];
  const pathname = usePathname();

  return (
    <header className='transparent top-0 z-50'>
      <nav className='layout flex items-center justify-between py-4'>
        <ul className='flex items-center gap-2 text-sm md:gap-4 md:text-base lg:text-lg'>
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                className='py-2 font-medium transition-colors hover:text-indigo-700 focus:outline-none'
                href={page.path}
              >
                <span
                  className={
                    pathname == page.path
                      ? 'bg-gradient-to-tr from-cyan-700 to-indigo-700 bg-clip-text text-transparent transition-none'
                      : ''
                  }
                >
                  {page.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p>LOGO</p>
      </nav>
    </header>
  );
}

// key={page.name}
// className={
//   'font-semibold transition-all duration-200 ease-in-out ' +
//   `${
//     pathname == page.path
//       ? 'bg-gradient-to-r from-cyan-600 to-indigo-700 bg-clip-text text-transparent'
//       : ' hover:text-indigo-700 '
//   }`
// }
