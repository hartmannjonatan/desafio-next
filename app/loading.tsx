import { montserrat, press } from '@/app/ui/fonts';


export default function Loading() {
  return (
    <main className='w-full text-center flex flex-col items-center justify-content-center'>
      <h1 className={`${press.className} text-2xl font-sunrise`}>Carregando...</h1>
      <div className="my-3 loader border-t-8 border-b-8 border-orange-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
    </main>
  )
}