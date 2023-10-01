import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item} >
        <h1 className={styles.title}>Welcome to NextPedia</h1>
        <p className={styles.desc}>Turning your idea into Reality. We showcase dynamic Portfolio and also allow users to create and manage blogs.</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item} >
      <Image src="/hero.png" width={500} height={500} alt="" className={styles.img} />
      </div>
    </div>
  )
}
