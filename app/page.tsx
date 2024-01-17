import { montserrat, press } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/imagem-card.module.css'


export default function Home() {
  return (
    <>
      <div className="text-center w-full" id='jogos'>
        <div className={`${styles.card} w-full hidden md:block`}>
          <Link href={"/games/pacman"}>
              <Image alt='Jogo Pacman' src={"/primaria-pacman.png"} width={1240} height={493}/>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`${styles.card}`}>
              <Link href={"/games/pacman"}>
                  <Image alt='Jogo Pacman' src={"/secundaria-pacman.png"} width={400} height={300} />
              </Link>
            </div>
            <div className={`${styles.card}`}>
              <Link href={"/#"}>
                <Image alt='Jogo Tetris' src={"/secundaria-tetris.png"} width={400} height={300} />
              </Link>
            </div>
            <div className={`${styles.card}`}>
              <Link href={"/#"}>
                  <Image alt='Jogo Nave' src={"/secundaria-nave.png"} width={400} height={300} />
              </Link>
            </div>
        </div>
      </div>
      <div className="h-screen" id='sobre'></div>
    </>
  )
}
