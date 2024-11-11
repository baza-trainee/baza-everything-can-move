function Description() {
  return (
    <div className="flex flex-col gap-6 text-s leading-[1.3] lg:max-w-[320px] lg:text-m 2xl:max-w-[346px] 2xl:text-sm">
      <p>
        Хочеш приєднатись до команди та створювати нові продукти? Є питання або
        пропозиції? Відкритий до спонсорства? Зв&#39;яжись з нами або відвідай
        наш сайт.
      </p>
      <div className="flex flex-col gap-3">
        <a href="http://baza-trainee.tech">
          <span className="underline underline-offset-4 hover:text-olga-green-extra">
            https://baza-trainee.tech
          </span>
        </a>
        <a
          href="mailto:info@baza-trainee.tech"
          className="hover:text-olga-green-extra"
        >
          info@baza-trainee.tech
        </a>
        <a href="tel:+380636286630" className="hover:text-olga-green-extra">
          +380 63 628 66 30
        </a>
        <a href="tel:+380956621073" className="hover:text-olga-green-extra">
          +380 95 662 10 73
        </a>
      </div>
    </div>
  );
}

export default Description;
