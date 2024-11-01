import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

type Props = { className?: string };

function ButtonContact({ className }: Props) {
  return (
    <button
      type="button"
      aria-label="Кнопка контакт"
      className={clsx(
        className,
        styles.button,

        'uppercase'
      )}
    >
      contact
    </button>
  );
}

export default ButtonContact;
