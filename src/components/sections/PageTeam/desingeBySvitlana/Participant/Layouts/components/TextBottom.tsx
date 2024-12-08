import clsx from 'clsx';

function TextBottom() {
  return (
    <ul className="z-0 flex justify-between">
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <p
            className={clsx(
              'min-w-[720px] font-second-family text-[84px] font-semibold uppercase leading-o-150 tracking-custom-tight',
              index % 2 !== 0 && 'text-stroke'
            )}
          >
            Наші учасники
          </p>
        </li>
      ))}
    </ul>
  );
}

export default TextBottom;
