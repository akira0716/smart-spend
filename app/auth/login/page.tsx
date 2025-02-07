'use client';

import { useRouter } from 'next/navigation'; // 画面遷移
import { Playfair_Display } from 'next/font/google'; // フォント

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Page() {
  const { replace } = useRouter();
  return (
    <div className='flex flex-col gap-[48px] justify-center items-center h-screen'>
      <h1 className={`text-4xl ${playfairDisplay.className}`}>Smart Spend</h1>
      <div>
        <button
          type='button'
          className='text-white bg-[#0a0a0a] px-[16px] py-[8px] rounded-lg'
          onClick={() => replace('/dashboard/home')}
        >
          ログイン
        </button>
      </div>
    </div>
  );
}
