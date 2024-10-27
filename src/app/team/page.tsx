import TeamPage from '@/components/PageTeam/TeamPage';
import Link from 'next/link';

function PageTeam() {
  return (
    <section className="text-white">
      <div className="container">
        <Link href={'/'} className="cursor-pointer text-olga-green-extra">
          Головна
        </Link>
      </div>
      <TeamPage />
    </section>
  );
}

export default PageTeam;
