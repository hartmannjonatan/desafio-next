import { montserrat, press } from '@/app/ui/fonts';
import { getSinglePost } from '@/sanity/sanity.query';
import { PostType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';


export default async function Post({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post: PostType = await getSinglePost(slug)
  const date: string | undefined = post != undefined ? new Date(post.publishedAt.toString()).toLocaleDateString("BR") : undefined
  return (
    <>
      { post != undefined && post != null?
        <div className="w-full mt-14 text-start" id='post'>
          <Image alt="Imagem do post" src={post.bannerImage.image} width={1240} height={368} />
          <h2 className={`${montserrat.className} font-bold text-center font-gray text-xl my-10`}>{post.title}</h2>
          <span className={`${montserrat.className} text-start font-gray text-sm`}>Por {post.author}, {date}</span>
          <div className={`${montserrat.className} text-justify font-white mt-10 whitespace-break-spaces`}>
            {post.body}
          </div>
        </div>
      : <h2 className={`${montserrat.className} font-white font-bold text-xl`}>Esse post não existe.</h2>}
    </>
  )
}
