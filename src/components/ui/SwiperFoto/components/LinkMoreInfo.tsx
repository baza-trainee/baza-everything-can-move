import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { className?: string; title: string; href?: string };

function LinkMoreInfo({ className, title, href = '/team' }: Props) {
  return (
    <Link
      href={`${href}`}
      className={cn('group ml-auto flex gap-2', className)}
    >
      <span className="relative after:absolute after:bottom-0 after:right-0 after:h-[1px] after:w-full after:bg-white after:transition-all after:duration-500 group-hover:after:w-0">
        {title}
      </span>

      <Image
        width={24}
        height={24}
        alt="Кнопка читати далі"
        src={'/assets/icons/icon_arrow.svg'}
        className="transition-all duration-500 ease-in-out group-hover:scale-125"
      />
    </Link>
  );
}

export default LinkMoreInfo;
