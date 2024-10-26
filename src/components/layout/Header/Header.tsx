'use client';
import React from 'react';
// import clsx from 'clsx';
import OpenMenuIcon from '@/assets/icons/header/open-menu-icon.svg';

export default function Header() {
  return (
    <header className="flex justify-end">
      <div>
        <div
          //   type="button"
          //   onClick={openModal}

          className="bg-olga-btn-menu hover:bg-olga-green hover:text-olga-bg h-[160px] w-[236px] cursor-pointer px-3 pb-3 pt-6 text-white transition-colors duration-300 ease-linear"
        >
          <OpenMenuIcon className="mb-[77px] ml-auto w-16 fill-current transition-colors duration-300 ease-linear hover:fill-black" />
          <p className="ml-auto transition-colors duration-300 ease-linear">
            МЕНЮ
          </p>
        </div>
      </div>
    </header>
  );
}
