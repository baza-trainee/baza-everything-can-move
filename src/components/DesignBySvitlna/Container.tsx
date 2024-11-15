import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

function Container({ children, className }: Props) {
  return (
    <div className={cn('w-full px-4 lg:px-6 2xl:px-20', className)}>
      {children}
    </div>
  );
}

export default Container;
