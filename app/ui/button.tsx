'use client';

import { montserrat, press } from '@/app/ui/fonts';
import clsx from 'clsx';
import styles from '@/app/ui/button.module.css';

type FunctionCallable = () => void;

export default function Button({
    click,
    text,
    type,
    width
  }: {
    click: FunctionCallable
    text: string;
    type: "submit" | "button";
    width: "md" | "lg";
}) {
  return (
    <>
        <button type={type} onClick={() => {click()}} className={clsx(
        `${styles.btn} ${montserrat.className} p-2 font-midnight`,
        {
          'w-full': width === 'lg',
          'w-50': width === 'md',
        },)}>{text}</button>
    </>
  )
}
