export default function Page() {
  return (
    <div className='m-[15px] flex flex-col gap-[12px] h-custom-h'>
      <div className='flex flex-col'>
        <label htmlFor=''>表示年月</label>
        <select className='px-[12px] py-[8px] w-[50%] rounded-lg text-xl'>
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
      </div>
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
        <button
          type='button'
          className='rounded-[8px] bg-[#333333] text-white w-[160px] px-[8px] py-[8px] mt-[24px] flex justify-center items-center gap-[4px]'
        >
          詳細を確認する
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.66667 11.3333L12 7.99999L8.66667 4.66666M4 11.3333L7.33333 7.99999L4 4.66666'
              stroke='#F5F5F5'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
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
