'use client';

import { LogOut } from '@deemlol/next-icons';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Header() {
  const { data: session, status } = useSession();

  // 認証中
  if (status == 'loading') {
    return <p>Now Loading...</p>;
  }

  const user_icon = String(session?.user?.image);

  return (
    <div className='px-[20px] py-[12px] flex justify-between items-center'>
      <div className='w-[32px] h-[32px] rounded-[50%] overflow-hidden bg-[#777777]'>
        <Image src={user_icon} alt='アイコン画像' width={32} height={32} />
      </div>
      <p className='font-bold text-2xl'>SmartSpend</p>
      <button type='button' onClick={() => signOut({ callbackUrl: '/' })}>
        <LogOut size={32} />
      </button>
    </div>
  );
}
