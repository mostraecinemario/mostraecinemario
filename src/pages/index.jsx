import Head from 'next/head'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpinner } from 'react-icons/fa';

import logo from '/public/logo.png';

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-between items-center ">
      <Head>
        <title>Em breve...</title>
      </Head>

      <main className="flex flex-col flex-grow items-center justify-center">
        <div className="animate-spin-slow mb-8">
          <Image src={logo} alt="logotipo da mostra de cinema"   height='100px' width="100px" />
        </div>
        <h1 className="text-2xl font-bold">
          Em construção...
        </h1>
      </main>
      
      <footer className="flex-none flex flex-col items-center p-6">
        <p>Acompanhe nossas redes sociais:</p>
        <div className="flex gap-5 pt-4">
          <a className="hover:text-mPink" href="https://www.facebook.com/mostraderiogrande" target="_blank" rel="noopener noreferrer">
            <FaFacebook size="30px" /> 
          </a>
          <a className="hover:text-mYellow" href="https://twitter.com/mostraderg" target="_blank" rel="noopener noreferrer">
            <FaTwitter size="30px" />
          </a>
          <a className="hover:text-mBlue" href="https://www.instagram.com/mostraderiogrande" target="_blank" rel="noopener noreferrer">
            <FaInstagram size="30px" />
          </a>
          <a className="hover:text-mRed" href="https://www.youtube.com/channel/UCrclqDH_n9OyjoFnhYNRq_A" target="_blank" rel="noopener noreferrer">
            <FaYoutube size="30px" />
          </a>
        </div>
      </footer>
    </div>
  )
}
