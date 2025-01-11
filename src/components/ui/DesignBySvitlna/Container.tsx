import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  isNoMaxWidth?: boolean;
};

function Container({ children, className, isNoMaxWidth = false }: Props) {
  return (
    <div
      className={cn(
        'ml-auto mr-auto w-full px-[20px] lg:px-6 2xl:px-20',
        className,
        isNoMaxWidth
          ? 'w-full'
          : 'max-w-[375px] lg:max-w-[768px] 2xl:max-w-[1440px]'
      )}
    >
      {children}
    </div>
  );
}

export default Container;
