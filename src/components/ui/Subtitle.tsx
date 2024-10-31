type Props = {
  text: string;
  typeText: 'month' | 'year';
  year: number;
};

function Subtitle({ text, typeText, year }: Props) {
  return (
    <p className="before:content-[' '] relative pl-3 text-[12px] leading-normal before:absolute before:left-0 before:top-2 before:h-[6px] before:w-[6px] before:rounded-full before:bg-olga-green lg:text-s">
      {typeText === 'month' && (
        <>
          {text} {year}
        </>
      )}
      {typeText === 'year' && (
        <>
          {year} {text}
        </>
      )}
    </p>
  );
}

export default Subtitle;
