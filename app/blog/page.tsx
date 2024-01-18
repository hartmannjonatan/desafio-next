import { montserrat, press } from '@/app/ui/fonts';
import { getPost } from '@/sanity/sanity.query';
import { PostType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import image_style from '@/app/ui/imagem-card.module.css'
import p_style from '@/app/ui/blog/paragraph.module.css'
import CardPost from '../ui/blog/card-post';


export default async function Blog() {
  const posts: PostType[] = await getPost()
  const destaque: PostType | undefined = posts.pop()
  const date: string | undefined = destaque?.publishedAt.toString() != undefined ? new Date(destaque?.publishedAt.toString()).toLocaleDateString("BR") : undefined
  return (
    <>
      <h1 className={`${press.className} font-sunrise text-center w-full text-2xl`}>BLOG</h1>
      { destaque != undefined && destaque != null?
        <div className="w-full mt-14" id='destaque'>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 mt-3">
            <div className={`${image_style.card} w-full`}>
              <Link href={`/blog/${destaque.slug.current}`}><Image alt={destaque.mainImage.alt} src={destaque.mainImage.image} width={610} height={339} /></Link>
            </div>
            <div className='text-start'>
              <h2 className={`${montserrat.className} font-bold text-center font-gray text-xl mb-10`}>{destaque.title}</h2>
              <span className={`${montserrat.className} font-gray text-sm`}>Por {destaque.author}, {date}</span>
              <div className={`${montserrat.className} ${p_style.paragraph} text-justify font-white mt-10`}>
                {destaque.body}
              </div>
            </div>
          </div>
        </div>
      : <h2 className={`${montserrat.className} font-white font-bold text-xl`}>Não há posts cadastrados no momento.</h2>}
      { posts.length > 0 ?
        <div className="w-full mt-14 mb-8" id='posts'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3">
            {posts.map((post, i) => {
                return <CardPost post={post} key={i} />
            })}
          </div>
        </div>
      : <></>
      }
    </>
  )
}
