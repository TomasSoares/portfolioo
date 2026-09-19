import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../utils/cx'
import styles from './Card.module.css'

/** Bordered surface used for Experience roles and Projects. Extra props (e.g. data-reveal) pass through. */
export default function Card({ className, ...rest }: ComponentPropsWithoutRef<'article'>) {
  return <article className={cx(styles.card, className)} {...rest} />
}
