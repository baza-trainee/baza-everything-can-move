'use client';
// I use it

import { useDesignStore } from '@/useDesignStore';
import { HeaderNavigationProps } from '@/components/layout/Header/types';

import HeaderNaviComponentOlga from '../DesignByOlga/HeaderNaviComponent';
import HeaderNaviComponentSvitlana from '../DesignBySvitlana/HeaderNaviComponent';
import NaviLinksComponentOlga2 from '../DesignByOlga/NLinksCompOlga2';

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  headerNav,
  handleMenuClick,
  openMenu,
}) => {
  const { designType } = useDesignStore();

  return (
    <>
      {/* design By Olga */}

      {designType === 'designByOlga' && (
        <HeaderNaviComponentOlga
          headerNav={headerNav}
          handleMenuClick={handleMenuClick}
          openMenu={openMenu}
        />
      )}
      {/* design By Svitlana */}
      {designType === 'designBySvitlana' && (
        <HeaderNaviComponentSvitlana
          headerNav={headerNav}
          handleMenuClick={handleMenuClick}
          openMenu={openMenu}
        />
      )}
    </>
  );
};

export default HeaderNavigation;
