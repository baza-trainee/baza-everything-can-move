'use client';

export default function ErrorTrigger() {
  if (true) {
    throw new Error('Це тестова помилка!');
  }

  return (
    <div>
      Цей текст ніколи не буде показаний, оскільки вище відбувається помилка.
    </div>
  );
}
