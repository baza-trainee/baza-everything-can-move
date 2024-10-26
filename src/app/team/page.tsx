import TeamPage from '@/components/PageTeam/TeamPage';
import Link from 'next/link';

function PageTeam() {
  return (
    <section className="text-white">
      <Link href={'/'} className="cursor-pointer text-olga-green-extra">
        Головна
      </Link>
      <TeamPage />
    </section>
  );
}

export default PageTeam;
