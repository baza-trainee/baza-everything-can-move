'use client';

import { designTypes, useDesignStore } from '@/useDesignStore';
import { useEffect, useState } from 'react';

const getRandomDesignType = (): designTypes => {
  return Math.random() < 0.5 ? 'designByOlga' : 'designBySvitlana'; //to change back!!! for dev purpose only
};

const InitializeDesign = () => {
  const { setDesignType } = useDesignStore();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDesignType(getRandomDesignType());
      setIsLoading(false);
    }, 300);
  }, [setDesignType]);

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
