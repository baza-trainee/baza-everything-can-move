import { FC } from 'react';
import { DataCards } from './participant.props';

export const Card: FC<DataCards> = ({ value, text }) => {
  return (
    <li>
      <div className="flex h-[360px] w-[320px] flex-col items-center justify-center rounded-2xl bg-white p-5 uppercase text-black">
        <span className="text-center font-second-family text-4xl font-semibold leading-o-150 tracking-custom-tight">
          {value}%
        </span>
        <p className="text-l font-regular leading-o-150">{text}</p>
      </div>
    </li>
  );
};
