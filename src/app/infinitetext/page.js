import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
      <main>
        <Image
            fill={true}
            src="/imagefloat/floating_5.jpg"
            alt="image"
        />
      </main>   
  )
}
