import Image from 'next/image';

export default function LogoAnimation() {
  return (
    <div>
      <Image src='/icons/nestjs.png' width={400} height={400} alt='nestjs' />
    </div>
  );
}
