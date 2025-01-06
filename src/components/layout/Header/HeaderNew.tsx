'use client';
import React from 'react';

import { useDesignStore } from '@/useDesignStore';

import HeaderOlga from './DesignByOlga/HeaderOlga';
import HeaderSvitlana from './DesignBySvitlana/HeaderSvitlana';

const HeaderNew: React.FC = () => {
  const { designType } = useDesignStore();

  return (
    <>
      {designType !== 'initial' && (
        <>
          {designType === 'designByOlga' && <HeaderOlga />}
          {designType === 'designBySvitlana' && <HeaderSvitlana />}
        </>
      )}
    </>
  );
};
export default HeaderNew;
