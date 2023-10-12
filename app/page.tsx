'use client';

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { motion } from 'framer-motion';
import 'animate.css';
import Animation from './components/elements/Animation/Animation';
import Marquee from 'react-fast-marquee';

const pixelify = Pixelify_Sans({ subsets: ['latin'] });
const icons = [
  'react',
  'nextjs',
  'framermotion',
  'hapijs',
  'postgresql',
  'materialui',
  'nodejs',
  'tailwind',
  'typescript',
  'nestjs',
  // 'redis',
];

function HelloWorld() {
  return (
    <div className='relative flex overflow-hidden text-[35px]'>
      <div className={'borderpy-0 relative h-[55px] pl-5'}>
        <motion.span
          initial={{ left: '40%', scale: 0.8, opacity: 0 }}
          animate={{ left: '0%', scale: 1, opacity: 1 }}
          className='absolute left-0 text-[55px] leading-[3.0rem] text-indigo-700'
        >
          [
        </motion.span>
        <motion.span
          initial={{ right: '40%', scale: 0.8, opacity: 0 }}
          animate={{ right: '-10%', scale: 1, opacity: 1 }}
          className='absolute -right-6 text-[55px] leading-[3.0rem] text-indigo-700'
        >
          ]
        </motion.span>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='relative animate-[change_ease-in-out_15s_infinite]'
        >
          {[
            'Hello World',
            'مرحبا بالعالم',
            'こんにちは世界',
            'Halo Dunia!',
          ].map((e) => (
            <li key={e} className='font-semibold'>
              {e}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

function Introduction() {
  return (
    <div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        className='pt-4 text-3xl font-semibold md:text-5xl 2xl:text-6xl'
      >
        The name is{' '}
        <span
          className={
            'bg-gradient-to-r from-cyan-600 to-indigo-700 bg-clip-text text-transparent ' +
            pixelify.className
          }
        >
          saukihalogais
        </span>
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.25 }}
      >
        <p className='pt-4 text-xs md:text-lg'>
          A passionate full-stack developer in the making! 👨‍💻.
        </p>
        <p className='text-xs opacity-50 md:text-lg'>
          Emang boleh se-<em>passionate</em> ini?
        </p>
      </motion.div>
    </div>
  );
}

function SkillView({ className }: { className?: string }) {
  return (
    <div
      className={
        'relative flex min-h-screen flex-col items-center justify-center text-yellow-400 ' +
        className
      }
    >
      {/* <h1 className={'py-12 text-6xl text-indigo-400 ' + pixelify.className} ></h1> */}
      <Marquee pauseOnHover={true} direction='right' className='py-4'>
        {icons.map((icon) => (
          <div
            key={icon}
            className='mx-4 flex h-16 w-32 cursor-pointer items-center justify-center rounded-xl bg-[#1F1C2D] shadow-[0_0.5rem_1.125rem_-0.5rem_rgba(0,0,0,0.5)] transition-all hover:bg-indigo-700'
          >
            <Image
              src={`/icons/${icon}.png`}
              width={40}
              height={40}
              alt={icon}
            />
          </div>
        ))}
      </Marquee>
      <h1 className={'py-2 text-lg xl:py-12 xl:text-6xl ' + pixelify.className}>
        🤑 PINJAM DULU SERATUS 🤑
      </h1>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div
        className='layout flex h-[calc(100vh-57px)] items-center justify-center
        before:absolute before:left-0 before:top-0 before:-z-10 before:h-screen before:w-full before:bg-[url("hero-bg.svg")] before:bg-cover'
      >
        <div>
          <HelloWorld />
          <Introduction />
        </div>
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          className='flex items-center justify-center text-[240px]'
        >
          <Image
            src='/smug-moon.png'
            width={400}
            height={400}
            alt='🌚'
            className='hidden drop-shadow-[11px_-9px_100px_#434158] sm:block'
          />
        </motion.div>
      </div>
      <SkillView />
    </main>
  );
}
