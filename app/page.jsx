import './index.scss'
import Buttons from '@/components/Buttons';
import Image from 'next/image'
import { BiLogoGmail } from "react-icons/bi";

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
            <div className='app__contentcontacts'>
              <BiLogoGmail size={20}/>
              <p>proflaianebernardo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}