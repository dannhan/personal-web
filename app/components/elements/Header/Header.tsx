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
    <header className='flex justify-center border-b border-slate-400 bg-transparent'>
      <nav className='mx-8 flex w-full max-w-6xl items-center justify-between'>
        <ul className='flex gap-4'>
          {pages.map((page) => (
            <li
              key={page.name}
              className={
                'font-semibold transition-all duration-200 ease-in-out ' +
                `${
                  pathname == page.path
                    ? 'bg-gradient-to-r from-cyan-600 to-indigo-700 bg-clip-text text-transparent'
                    : ' hover:text-indigo-700 '
                }`
              }
            >
              <Link className='block py-4' href={page.path}>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <p>INPO LOGO GAIS</p>
      </nav>
    </header>
  );
}
