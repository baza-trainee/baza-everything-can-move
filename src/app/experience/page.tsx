import Link from 'next/link';

function Page() {
  return (
    <section className="text-white">
      <div className="container">
        <h1>Experience</h1>
        <Link href={'/'} className="text-olga-green-extra cursor-pointer">
          Головна
        </Link>
      </div>
    </section>
  );
}

export default Page;
