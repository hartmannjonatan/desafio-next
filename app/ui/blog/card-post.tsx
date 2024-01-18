import { montserrat, press } from '@/app/ui/fonts';
import { PostType } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import image_style from '@/app/ui/imagem-card.module.css'

export default function CardPost({
    post,
  }: {
    post: PostType
}) {
  return (
    <>
        <div className={`${image_style.card} w-full`}>
            <Link href={`/blog/${post.slug.current}`}>
                <Image alt={post.mainImage.alt} src={post.mainImage.image} width={390} height={220} />
            </Link>
        </div>
        <h3 className={`${montserrat.className} text-gray`}>{post.title}</h3>
    </>
    
  )
}
