'use client';
// we use it !!!
import React from 'react';
import clsx from 'clsx';

export interface SubTitleAnimationProps {
  children: React.ReactNode;
  className?: string;
  color: 'black' | 'white';
}
const SubTitleAnimation = ({
  children,
  className,
  color,
}: SubTitleAnimationProps) => {
  return (
    <div
      // if center add items-center
      className={clsx(
        color === 'black' && 'text-black',
        color === 'white' && 'text-white',
        className
      )}
    >
      <h3
        className={clsx(
          'font-second-family text-md font-semibold uppercase leading-o-120 tracking-s-2 lg:text-lg lg:font-medium'
        )}
      >
        {children}
      </h3>
    </div>
  );
};

export default SubTitleAnimation;

//Attention!
// for subtitle we use SubTitleAnimation + SubTitleBtn
// props 1. color="white" or  color="black"
// props 2. array of options- create your own Array in constans/data/subTitleArr
// then export and send it as props
// <SubTitleBtn subTitleArr={subTitlesOurCustomers} color="black" />;
// props 3. className SubTitleAnimation and  SubTitleBtn (optional)

// example how to use

// in row
// <div className="mb-9 flex flex-row items-center">
//     <SubTitleAnimation className="mr-6" color="white">
//       наші замовники
//     </SubTitleAnimation>
//     <SubTitleBtn
//       className="justify-center lg:justify-normal"
//       subTitleArr={subTitlesOurCustomers}
//       color="white"
//     />
//   </div>

//in column

//    <div className="mb-9 flex flex-col">
//   <SubTitleAnimation className="mb-3" color="black">
//     наші замовники
//   </SubTitleAnimation>
//   <SubTitleBtn subTitleArr={subTitlesOurCustomers} color="black" />
// </div>;

// Have Fun ))))
