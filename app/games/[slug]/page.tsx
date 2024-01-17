import { montserrat, press } from '@/app/ui/fonts';
import { getSingleGame } from '@/sanity/sanity.query';
import { GameType } from '@/types';

export default async function Game({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const game: GameType = await getSingleGame(slug)
    console.log(game)
  return (
    <main>
        <h1 className={`${press.className} font-sunrise`}>{game.title}</h1>
        <p>
          {game.description}
        </p>
    </main>
  )
}