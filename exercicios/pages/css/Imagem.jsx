import Image from 'next/image'
import Front from "./img/front.webp"
import Back from './img/Back.webp'
import Full from './img/Full.jpg'
import styles from '../css/imagem.module.css'
export default function Imagem() {
  return (
    
    <div className={styles.imagem}>
      <Image
        src={Front}
        width={400}
        height={300}
        alt="Picture of the authorad" 
      />
      <Image
        src={Back}
        width={400}
        height={300}
        alt="Picture of the authorad" 
      />
      <Image
        src={Full}
        width={400}
        height={300}
        alt="Picture of the authorad" 
      />
    </div>
  )
}