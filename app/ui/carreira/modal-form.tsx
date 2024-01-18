import { montserrat, press } from '@/app/ui/fonts';
import style from '@/app/ui/carreira/modal.module.css'
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ModalForm({
  isOpen,
}: {
  isOpen: boolean;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setOpen(true);

      const timeoutId = setTimeout(() => {
        setOpen(false);
        router.push('/');
      }, 3000);

      return () => clearTimeout(timeoutId);
    } else {
      setOpen(false);
    }
  }, [isOpen]);


    return (
      <>
        <div className={`${press.className} ${style.modal} ${open ? `block ${style.fadeOut} ${style.animated}` : "hidden"} text-center justify-center items-center flex flex-col fixed bottom-10 right-10 font-midnight text-2xl px-5 py-2 w-min rounded`}>
            <h3>Formulário enviado com sucesso!</h3>
            <Image alt="Ícone de sucesso" src={"/ok-vector.png"} width={122} height={101} className='inline mt-3'/>
        </div>
      </>
    );
}