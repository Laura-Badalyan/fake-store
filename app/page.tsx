import Link from 'next/link';

export default function HomePage() {
  return (
    <div className=' '>
      <h1 className='text-center text-3xl font-bold text-fuchsia-800 shadow-2xl shadow-fuchsia-900 p-6'>Welcome To The Redux Toolkit Project</h1>
      <div className='flex justify-around items-center'>
        <button className='text-center text-3xl py-8 px-4 uppercase cursor-pointer'>
          <Link href="/counter">
            Counter
          </Link>
        </button>
        <div>
          <button className='text-center text-3xl py-8 px-4 uppercase cursor-pointer'>
            <Link href="/products">
              Products
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
