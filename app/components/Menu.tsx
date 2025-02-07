'use client';

import Link from 'next/link';
import RegistrationModal, {
  OperationModal,
  Operation,
} from './RegistrationModal';
import { House, PlusCircle, Settings } from '@deemlol/next-icons';

export default function Menu() {
  return (
    <div className='bg-[#F1F1F1] px-[20px] py-[12px] flex justify-between items-center'>
      <Link href='/dashboard/home'>
        <House size={32} color='#000000' />
      </Link>
      <button type='button' onClick={() => OperationModal(Operation.OPEN)}>
        <PlusCircle size={32} color='#000000' />
      </button>
      <Link href='/dashboard/setting'>
        <Settings size={32} color='#000000' />
      </Link>
      <RegistrationModal />
    </div>
  );
}
