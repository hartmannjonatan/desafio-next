import { montserrat, press } from '@/app/ui/fonts';

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug;
  return (
    <main>
        <h1 className={`${press.className} font-sunrise`}>Blog - Post: {slug}</h1>
    </main>
  )
}