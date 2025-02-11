'use client';

import { ChangeEvent, useState } from 'react';

interface FormData {
  expenditureDate: string;
  expenditure: number;
  category: string;
  description: string;
}

export default function RegisdivationModal() {
  const [data, setData] = useState<FormData>({
    expenditureDate: '',
    expenditure: 0,
    category: '',
    description: '',
  });

  const handlerFormChanged = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: name === 'expenditure' ? parseInt(value) : value,
    }));
  };

  return (
    <dialog
      id='regisdivationModal'
      className='w-[80%] bg-[#F1F1F1] p-[20px] rounded-[8px]'
    >
      <p className='font-bold text-xl'>支出の登録</p>
      <div className='mt-[16px] flex flex-col gap-[8px]'>
        <div className='flex items-start gap-[16px]'>
          <p className='flex-shrink-0 w-[20%] text-left'>支出日</p>
          <div className='flex-grow'>
            <input
              className='bg-[#FFFFFF] px-[8px] py-[4px] rounded-[4px]'
              type='date'
              name='expenditureDate'
              value={data.expenditureDate}
              onChange={handlerFormChanged}
            />
          </div>
        </div>
        <div className='flex items-start gap-[16px]'>
          <p className='flex-shrink-0 w-[20%] text-left'>金額</p>
          <div className='flex-grow'>
            <input
              className='px-[8px] py-[4px] w-[75%] rounded-[4px] text-right'
              type='number'
              name='expenditure'
              value={data.expenditure}
              onChange={handlerFormChanged}
            />
          </div>
        </div>
        <div className='flex items-start gap-[16px]'>
          <p className='flex-shrink-0 w-[20%] text-left'>分類</p>
          <div className='flex-grow'>
            <select
              name='category'
              className='bg-[#FFFFFF] px-[8px] py-[4px] rounded-[4px]'
              onChange={handlerFormChanged}
            >
              {category.map((item, index) => {
                return (
                  <option key={index} value={index + 1}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className='flex items-start gap-[16px]'>
          <p className='flex-shrink-0 w-[20%] text-left'>説明</p>
          <div className='flex-grow'>
            <textarea
              className='px-[8px] py-[4px] w-[75%] rounded-[4px]'
              name='description'
              value={data.description}
              onChange={handlerFormChanged}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[16px] mt-[16px]'>
        <button
          type='button'
          className='bg-[#333333] text-[#ffffff] px-[16px] py-[4px] rounded-[4px]'
        >
          登録
        </button>
        <button
          type='button'
          className='bg-[#999999] text-[#ffffff] px-[16px] py-[4px] rounded-[4px]'
          onClick={() => OperationModal(Operation.CLOSE)}
        >
          キャンセル
        </button>
      </div>
    </dialog>
  );
}

export const OperationModal = (operation: Operation) => {
  const modal = document.getElementById(
    'regisdivationModal'
  ) as HTMLDialogElement;
  if (modal) {
    switch (operation) {
      case Operation.OPEN:
        modal.showModal();
        break;

      case Operation.CLOSE:
        modal.close();

      default:
        break;
    }
  }
};

export enum Operation {
  OPEN,
  CLOSE,
}

// Todo: データベースからマスタを取得する。
const category = ['食費', '雑費', '日用品'];
