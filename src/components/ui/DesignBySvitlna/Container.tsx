import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        'ml-auto mr-auto w-full max-w-[375px] px-[20px] lg:max-w-[768px] lg:px-6 2xl:max-w-[1440px] 2xl:px-20',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
