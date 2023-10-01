import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©️2023 Luv Chaudhary. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/1.png" className={styles.icons} width={15} height={15} alt="Luv" />
          <Image src="/2.png" className={styles.icons} width={15} height={15} alt="Luv" />
          <Image src="/3.png" className={styles.icons} width={15} height={15} alt="Luv" />
          <Image src="/4.png" className={styles.icons} width={15} height={15} alt="Luv" />
        </div>
    </div>
  )
}

export default Footer