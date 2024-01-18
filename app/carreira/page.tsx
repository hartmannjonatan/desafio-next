import { montserrat, press } from '@/app/ui/fonts';
import Form from '../ui/carreira/form';

export default function Carreira() {
  return (
    <>
        <h1 className={`${press.className} font-sunrise text-2xl`}>Formulário de Vaga</h1>
        <div className="text-start flex justify-center content-center lg:px-48 md:px-20" id='form'>
          <Form />
        </div>
    </>
  )
}
