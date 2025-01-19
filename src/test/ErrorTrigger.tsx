'use client';

export default function ErrorTrigger() {
  // Бросаем ошибку
  if (true) {
    throw new Error('Це тестова помилка!');
  }

  // Компонент должен вернуть JSX
  return (
    <div>
      Цей текст ніколи не буде показаний, оскільки вище відбувається помилка.
    </div>
  );
}
