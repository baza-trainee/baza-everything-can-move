import Image from 'next/image';
import React from 'react';
import { TeamsFotoType } from './ui/dataFoto';

function CardTeam({ name, urlFoto, role }: TeamsFotoType) {
  return (
    <div
      style={{
        backdropFilter: 'blur(87.77425384521484px)',
        background: 'rgba(188, 187, 249, 0.2)',
      }}
      className="flex h-[280px] w-[224px] flex-col items-center justify-center rounded-2xl border-[1px] border-white font-second-family opacity-95"
    >
      <Image
        src={urlFoto}
        className="pointer-events-none mb-6 rounded-full"
        alt={name}
        width={100}
        height={100}
      />
      <h2 className="mb-4 flex flex-col text-center text-md font-medium leading-o-120 tracking-custom-tight">
        {[...name.split(' ')].map((item, inex) => (
          <span key={inex}>{item}</span>
        ))}
      </h2>
      <p className="text-s font-semibold leading-s-100 tracking-custom-tight text-s-purple">
        {role}
      </p>
    </div>
  );
}

export default CardTeam;
