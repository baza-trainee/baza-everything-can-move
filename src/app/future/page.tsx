import SectionFuture from '@/components/sections/Future/SectionFuture';
import SectionDevelopment from '@/components/sections/Future/SectionDevelopment';
import SectionPlan from '@/components/sections/Future/SectionPlan';
import SectionJoin from '@/components/sections/PageTeam/SectionJoin/SectionJoin';



function Page() {
  return (
    <section className="text-white">
        <SectionFuture/>
        <SectionPlan/>
        <SectionDevelopment/>
        <SectionJoin/>
    </section>
  );
}

export default Page;
