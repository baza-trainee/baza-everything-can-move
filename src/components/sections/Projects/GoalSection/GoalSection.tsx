'use client';
import React from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SharedDesigns/SectionTitle';
import SubTitle from '@/components/ui/DesignByOlga/SubTitle';
import './goalsection.css';

const techItems = [
  'CSS',
  'REACT',
  'NEXTJS',
  'TYPESCRIPT',
  'TAILWIND',
  'FIGMA',
  'JIRA',
  'TRELLO',
  'AI',
];

const GoalSectiont: React.FC = () => {
  return (
    <section className="relative overflow-hidden pb-16">
      <SectionTitle className="mb-1">Наша мета</SectionTitle>
      <SubTitle className="mb-8">Разом досягаємо результату</SubTitle>

      <div className="animate-marquee-reverse decor relative inline-block w-[100%] whitespace-nowrap">
        <Image
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
      <div className="relative flex flex-wrap items-center justify-between 2xl:flex-nowrap">
        <div className="h-[100%] w-[100%] bg-[url('/assets/images/HomeImg/goal.png')] bg-center bg-no-repeat">
          <div className="circle-container h-[450px] max-w-[720px]">
            {techItems.map((item, index) => (
              <div key={index} className={`circle-item item-${index + 1}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <p className="lg:max-w-[346px]">
          Проєкт створено для взаємної підтримки двох соціальних груп. <br></br>
          <br />
          Організації соціальної сфери, які готові бути лояльними замовниками і
          дозволити команді виконати проєкт без поспіху, але зі збережням рівня
          якості продукту.
          <br /> <br />
          ківці та випускники ІТ-курсів, які хочуть застосувати на практиці
          теоретичні знання.
        </p>
      </div>
      <div className="animate-marquee inline-block w-[100%] whitespace-nowrap">
        <Image
          src="/assets/images/HomeImg/line.svg"
          alt="Line Image"
          width={100}
          height={20}
        />
      </div>
    </section>
  );
};
export default GoalSectiont;
