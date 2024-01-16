import { montserrat, press } from '@/app/ui/fonts';

export default async function Game({ params }: { params: { slug: string } }) {
    const slug = params.slug;
  return (
    <main>
        <h1 className={`${press.className} font-sunrise`}>Game: {slug}</h1>
    </main>
  )
}