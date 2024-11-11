'use client';

import { designTypes, useDesignStore } from '@/useDesignStore';
import { useEffect, useState } from 'react';

const getRandomDesignType = (): designTypes => {
  return Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana';
};

const InitializeDesign = () => {
  const { setDesignType, designType } = useDesignStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDesignType(getRandomDesignType());
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <h1>loading...</h1>
      </div>
    );
  }

  return null;
};

export default InitializeDesign;
