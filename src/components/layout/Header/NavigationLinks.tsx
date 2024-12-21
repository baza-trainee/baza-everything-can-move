'use client';
import React from 'react';

import { useDesignStore } from '@/useDesignStore';

import { NavigationLinksProps } from '@/components/layout/Header/types';

import NaviLinksComponentOlga from './DesignByOlga/NaviLinksComponent';
import NaviLinksComponentSvitlana from './DesignBySvitlana/NaviLinksComponent';

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  headerNav,
  onClickLink,
}) => {

  const { designType } = useDesignStore();
  return (
    <nav>
      {designType === 'designByOlga' && (
        <NaviLinksComponentOlga
          headerNav={headerNav}
          onClickLink={onClickLink}
        />
      )}

      {designType === 'designBySvitlana' && (
        <NaviLinksComponentSvitlana
          headerNav={headerNav}
          onClickLink={onClickLink}
        />
      )}
    </nav>
  );
};

export default NavigationLinks;
