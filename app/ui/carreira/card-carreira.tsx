import { montserrat, press } from '@/app/ui/fonts';
import Link from 'next/link';
import styles from '@/app/ui/carreira/card.module.css'

export default function CardCarreira({
    title,
    categories
  }: {
    title: string;
    categories: string[]
}) {
  return (
    <Link href={"/carreira"}>
        <div className={`${styles.card} p-2`}>
            <h2 className={`${montserrat.className} text-start m-2 font-bold font-gray mb-2`}>{title}</h2>
            <div className={`${styles.categories} flex justify-start content-center items-center`}>
                {categories.map((category, i) => {
                    return <div className={`${montserrat.className} ${styles.category} p-1 m-2 font-gray`}>{category}</div>
                })}
            </div>
        </div>
    </Link>
  )
}
