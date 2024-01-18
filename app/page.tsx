import { montserrat, press } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/imagem-card.module.css'
import CardCarreira from './ui/carreira/card-carreira';
import { GameType } from '@/types';
import { getGame } from '@/sanity/sanity.query';


export default async function Home() {
  const games: GameType[] = await getGame();
  const destaque: GameType | undefined = games.pop()
  return (
    <>
      <div className="text-center w-full" id='jogos'>
        {destaque != undefined && destaque != null?
          <div className={`${styles.card} w-full mb-5`} id='destaque'>
            <Link href={`/games/${destaque.slug.current}`}>
                <Image alt={destaque.title} src={destaque.mainImage.image} width={1240} height={493}/>
            </Link>
          </div>
        : <h2 className={`${montserrat.className} font-white font-bold text-xl`}>Não há jogos cadastrados no momento</h2>}
        {games.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-3">
              {games.map((game, i) => {
                  return <div className={`${styles.card}`} key={i}>
                          <Link href={`/games/${game.slug.current}`}>
                              <Image alt={game.title} src={game.secondaryImage.image} width={400} height={300} />
                          </Link>
                        </div>
              })}
          </div>
        : <></>}
      </div>
      <div className="w-full mt-14" id='sobre'>
        <h1 className={`${press.className} font-sunrise text-center w-full text-2xl`}>Sobre Nós</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-3">
          <div className={`${montserrat.className} text-center font-white`}>
            <p className='py-5'>
              Bem-vindo à Jojos, uma empresa de jogos retrô brasileira! Somos uma equipe apaixonada por games clássicos e estamos comprometidos em trazer de volta a magia desses títulos que marcaram época. Com gráficos pixelizados, trilhas sonoras envolventes e mecânicas desafiadoras, nossos jogos são verdadeiras homenagens aos consoles e computadores que encantaram o passado. Junte-se a nós e embarque em uma viagem nostálgica repleta de aventuras.
            </p>
            <p className='py-5'>
              Acreditamos que os jogos retrô têm o poder de unir gerações, despertar memórias afetivas e proporcionar momentos de pura diversão. Nossa missão é manter viva a essência dos jogos clássicos, levando você a uma jornada inesquecível pelos mundos pixelizados cheios de magia. Faça parte dessa nova era retrô e mergulhe em experiências que continuam a encantar corações até hoje.
            </p>
            <p className='py-5'>
              Jojos, onde a nostalgia encontra a diversão! Com uma equipe apaixonada por games, estamos comprometidos em trazer de volta a magia dos jogos clássicos que marcaram gerações inteiras. Explore nossos jogos e embarque em uma viagem nostálgica repleta de aventuras e desafios. Junte-se a nós e compartilhe da nossa paixão pelos jogos retrô!
            </p>
          </div>
          <div>
            <Image alt='Imagem sobre nós' src={"/image-about_us.png"} width={560} height={689} />
          </div>
        </div>
      </div>
      <div className="w-full mt-14 mb-8" id='carreira'>
        <h1 className={`${press.className} font-sunrise w-full text-2xl`}>Carreira</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3">
          <CardCarreira key={1} title='Desenvolvedor C++ Júnior' categories={["DEV", "Remoto"]} />
          <CardCarreira key={2} title='Desenvolvedor C++ Pleno' categories={["DEV", "Remoto"]} />
          <CardCarreira key={3} title='Engenheiro de Software' categories={["Engenheiro", "Remoto"]} />
          <CardCarreira key={4} title='Artista Técnico' categories={["Artista", "Remoto"]} />
          <CardCarreira key={5} title='Representante Comercial' categories={["Comercial", "Presencial"]} />
        </div>
      </div>
    </>
  )
}
