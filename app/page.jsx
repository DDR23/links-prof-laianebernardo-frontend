import './index.scss'
import Buttons from '@/components/Buttons';
import Image from 'next/image'

export default function App() {
  return (
    <>
      <div className="app">
        <div className="app__content">
          <div className="app__contentperfil">
            <Image src={'/perfil.png'} width={140} height={140} alt='perfils' priority={true} />
            <p>Prof. Laiane Bernardo</p>
          </div>
          <div className="app__contentbtns">
            <Buttons name="Visite meu Blogger" link="https://proflaianebernardo.blogspot.com/?m=1" target="" />
            <Buttons name="Gmail" link="https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=GTvVlcSHvbGccchHFBKtvgkGCLWDHbdhfkTgVlxFWhLKthzmtlBGJpQpGNmXTDVlcSXjjvlrTSGSD" target="" />
          </div>
        </div>
      </div>
    </>
  )
}