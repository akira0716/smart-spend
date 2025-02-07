import { User, LogOut } from '@deemlol/next-icons';

export default function Header() {
  return (
    <div className='px-[20px] py-[12px] flex justify-between items-center'>
      <div className='w-[32px] h-[32px] rounded-[50%] overflow-hidden bg-[#777777]'>
        <User size={32} color='#FFFFFF' />
      </div>
      <p className='font-bold text-2xl'>SmartSpend</p>
      <button type='button'>
        <LogOut size={32} color='#000000' />
      </button>
    </div>
  );
}
