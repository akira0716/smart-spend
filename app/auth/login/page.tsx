'use client';

import { useRouter } from 'next/navigation'; // 画面遷移
import { Playfair_Display } from 'next/font/google'; // フォント

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default function Page() {
  const { replace } = useRouter();

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse lg:gap-20'>
        <div className='text-center lg:text-left'>
          <h1 className={`text-5xl font-bold ${playfairDisplay.className}`}>
            SmartSpend
          </h1>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>メールアドレス</span>
              </label>
              <input type='email' className='input input-bordered' required />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>パスワード</span>
              </label>
              <input
                type='password'
                className='input input-bordered'
                required
              />
              <label className='label'>
                <a href='#' className='label-text-alt link link-hover'>
                  パスワードを忘れてしまった方
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <button
                className='btn btn-primary'
                onClick={() => replace('/dashboard/home')}
              >
                ログイン
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
