import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ChevronRight2 } from '@deemlol/next-icons';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className='m-[15px] flex flex-col gap-[12px] h-custom-h'>
      <label className='form-control w-full max-w-xs'>
        <div className='label'>
          <span className='label-text'>表示年月</span>
        </div>
        <select className='select select-bordered'>
          {optionObject.map((obj) => {
            const value = JSON.stringify(obj);
            const view = `${obj.year}年${obj.month}月`;
            const key = `${obj.year}${obj.month}`;
            return (
              <option key={key} value={value}>
                {view}
              </option>
            );
          })}
        </select>
      </label>
      <div className='bg-[#F1F1F1] grow p-[16px] flex flex-col gap-[16px]'>
        <div>
          <p>合計支出</p>
          <div className='flex items-end gap-[8px]'>
            <p className='text-2xl px-[8px] py-[4px] shadow-custom-inset rounded-[4px] bg-[#D9D9D9] w-[40%] text-right'>
              32,000
            </p>
            <p>円</p>
          </div>
        </div>
        <div>
          <p>残り使用可能額</p>
          <div className='flex items-end gap-[8px]'>
            <p className='text-2xl px-[8px] py-[4px] shadow-custom-inset rounded-[4px] bg-[#D9D9D9] w-[40%] text-right'>
              18,000
            </p>
            <p>円</p>
          </div>
        </div>
        <button className='btn btn-active btn-secondary'>
          詳細を確認する
          <ChevronRight2 size={32} color='#000000' />
        </button>
      </div>
    </div>
  );
}

// 仮データ（Todo: マスタテーブルなどを用意したい。）
const optionObject = [
  { year: 2025, month: 1 },
  { year: 2025, month: 2 },
  { year: 2025, month: 3 },
  { year: 2025, month: 4 },
  { year: 2025, month: 5 },
  { year: 2025, month: 6 },
  { year: 2025, month: 7 },
  { year: 2025, month: 8 },
  { year: 2025, month: 9 },
  { year: 2025, month: 10 },
  { year: 2025, month: 11 },
  { year: 2025, month: 12 },
];
