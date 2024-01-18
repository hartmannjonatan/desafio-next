import Button from '@/app/ui/button';
import { montserrat, press } from '@/app/ui/fonts';
import { getSingleGame } from '@/sanity/sanity.query';
import { GameType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/button.module.css'

export default async function Game({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const game: GameType = await getSingleGame(slug)
  return (
    <main>
        <h1 className={`${press.className} font-sunrise text-2xl`}>{game.title}</h1>
        <Image alt={game.title} src={game.mainImage.image} width={1240} height={493} className='my-5'/>
        <div className="w-max flex justify-between items-center">
          <span className={`${montserrat.className} block font-white mr-5`}>Valor: R$ {game.value.toFixed(2)}</span>
          <Link href={''} className={`${styles.btn} p-2 w-50`}>Comprar</Link>
        </div>
        <div className={`${montserrat.className} text-justify font-white mt-10 whitespace-break-spaces`}>
            {game.description}
        </div>
    </main>
  )
}