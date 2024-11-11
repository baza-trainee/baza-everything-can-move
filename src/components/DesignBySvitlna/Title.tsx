import { cn } from '@/lib/utils';
import React from 'react';

type PropsTitle = { text: string; className?: string };

function Title({ text, className }: PropsTitle) {
  return (
    <h1
      className={cn(
        'text-[42px] font-semibold uppercase leading-o-150 tracking-custom-tight text-s-purple lg:text-3xl lg:leading-s-120',
        className
      )}
    >
      {text}
    </h1>
  );
}

export default Title;
