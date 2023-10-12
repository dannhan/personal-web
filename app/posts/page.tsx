export default function Posts() {
  return (
    <>
      <div className='flex items-center border border-yellow-400'>
        <ul className='border border-yellow-800'>
          {['Pertama', 'Kedua', 'Ketiga'].map((e) => (
            <li key={e} className='border border-yellow-800'>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
