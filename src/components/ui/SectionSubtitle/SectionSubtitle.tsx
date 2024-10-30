import React from 'react'
import styles from "./SectionSubtitle.module.css"
import clsx from 'clsx'

export interface SubtitleProps {
  children: React.ReactNode,
}

function SectionSubtitle({children}: SubtitleProps) {
  return (
    <h3 className={clsx('font-main-family leading-o-150 text-s text-white relative pl-[14px]', [styles.subtitle])}>{children}</h3>
  )
}

export default SectionSubtitle