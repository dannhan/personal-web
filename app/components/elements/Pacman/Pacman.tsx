import styles from './Pacman.module.css';

export default function Pacman() {
  return (
    <div className='relative h-[100px] w-screen'>
      <svg
        className={
          'absolute z-10 h-[100px] w-[100px] fill-none ' + styles.pacman
        }
      >
        <circle cx='50' cy='50' r='25' />
      </svg>
      <svg
        className={
          'absolute left-[54px] top-[17px] z-20 h-3 w-3 fill-black ' +
          styles.eye
        }
      >
        <circle cx='6' cy='6' r='6' />
      </svg>
      {/* <div className={styles.feed}></div> */}
      <div className='absolute top-8'>
      </div>
    </div>
  );
}
