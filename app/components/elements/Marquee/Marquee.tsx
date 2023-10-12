import ReactMarquee from 'react-fast-marquee';

export default function Marquee() {
  const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <ReactMarquee speed={45} loop={0}>
      {nums.map((n) => (
        <div
          key={n}
          className='mx-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-3xl text-black'
        >
          {n}
        </div>
      ))}
    </ReactMarquee>
  );
}
