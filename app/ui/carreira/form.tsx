"use client"
import { montserrat, press } from '@/app/ui/fonts';
import form_style from '@/app/ui/carreira/form.module.css'
import button_style from '@/app/ui/button.module.css'
import { useState } from 'react';
import ModalForm from './modal-form';

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  return (
    <form action="/" method='POST' className='w-full'>
        <div className="grid grid-col-1 gap-7 pt-10 pb-5">
            <div>
                <label htmlFor="name" className={`${montserrat.className} font-gray block`}>Nome:</label>
                <input id='name' type="text" className={`${montserrat.className} ${form_style.form_input} mt-3 p-3 block w-full bg-transparent font-gray`} />
            </div>
            <div>
                <label htmlFor="email" className={`${montserrat.className} font-gray block`}>Email:</label>
                <input id='email' type="email" className={`${montserrat.className} ${form_style.form_input} mt-3 p-3 block w-full bg-transparent font-gray`} />
            </div>
            <div>
                <label htmlFor="link" className={`${montserrat.className} font-gray block`}>Link para portfólio:</label>
                <input id='link' type="url" className={`${montserrat.className} ${form_style.form_input} mt-3 p-3 block w-full bg-transparent font-gray`} />
            </div>
            <div>
                <label htmlFor="descricao" className={`${montserrat.className} font-gray block`}>Link para portfólio:</label>
                <textarea rows={10} id='descricao' className={`${montserrat.className} ${form_style.form_input} mt-3 p-3 block w-full bg-transparent font-gray`} />
            </div>
            <button type="button" onClick={() => setIsSubmitted(true)} className={`${button_style.btn} p-2 w-50 text-center`}>Enviar Formulário</button>
            <ModalForm isOpen={isSubmitted} />
        </div>
    </form>
  )
}
