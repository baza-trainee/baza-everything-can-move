'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <div className="mx-auto my-[150px] flex flex-col items-center">
          <h2 className="mb-16 text-center text-xl text-white">
            Щось трапилося
          </h2>
          <button
            className="mx-auto rounded-full border-[1px] px-[12.8px] py-[12.5px] text-sm font-regular leading-[23.4px] transition-colors hover:bg-white hover:text-black lg:px-[20px] lg:py-[9px] lg:text-md lg:leading-[26px] 2xl:py-[6.5px] 2xl:text-l 2xl:leading-[31.2px]"
            onClick={() => reset()}
          >
            Спробуй ще
          </button>
        </div>
      </body>
    </html>
  );
}
