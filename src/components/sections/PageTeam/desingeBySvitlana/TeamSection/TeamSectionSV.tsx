import Container from '@/components/ui/DesignBySvitlna/Container';
import React, { useState } from 'react';
import Header from './components/Header';
import GloboTeam from './components/GloboTeam';
import ListTeam from './components/ListTeam';
import SwiperSlider from './components/SwiperSlider';

function TeamSectionSV() {
  const [isSwiper, togleSwiper] = useState(true);
  return (
    <section className="relative overflow-hidden border-t border-t-white pb-[140px] pt-20 lg:pb-[178px] lg:pt-[160px] 2xl:pb-[110px] 2xl:pt-[100px]">
      <Container className="">
        <Header />
        <GloboTeam />
      </Container>
      {isSwiper ? <ListTeam /> : <SwiperSlider />}
      {/* <ListTeamcopy /> */}
      <button
        type="button"
        className="rounded-xl border-solid border-white bg-s-light-purple p-4"
        onClick={() => togleSwiper(!isSwiper)}
      >
        зміни слайдер
      </button>
    </section>
  );
}

export default TeamSectionSV;
