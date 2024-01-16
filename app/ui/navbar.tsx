import { montserrat, press } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/button.module.css'

export default function Navbar() {
  return (
    <nav className='md:flex px-20 py-5 md:justify-between w-full md:content-center'>
        <div id='logo' className='flex content-center md:justify-around flex-wrap-reverse justify-center'>
          <Image
              src="/Icon.png"
              width={49}
              height={40}
              alt="Logotipo"
              className='block mr-2'
          />
          <div className={`${press.className} content-center flex h-min flex-wrap-reverse`}>
              <span className='font-white text-2xl'>J</span>
              <span className='font-sunrise text-2xl'>O</span>
              <span className='font-white text-2xl'>J</span>
              <span className='font-sunrise text-2xl'>O</span>
              <span className='font-white text-2xl'>S</span>
          </div>
        </div>
        <div id='menu' className={`${montserrat.className} flex my-3 md:my-auto justify-between md:w-2/6 w-full content-center items-center`}>
          <Link href={'/#jogos'} className='font-white h-min'>Jogos</Link>
          <Link href={'/#sobre'} className='font-white h-min'>Sobre</Link>
          <Link href={'/blog'} className='font-white h-min'>Blog</Link>
          <Link href={'/#carreira'} className={`${styles.btn} p-2 w-50`}>Carreira</Link>
        </div>
    </nav>
  )
}
