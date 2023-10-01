import React from "react"
import styles from "./page.module.css"
import Image from 'next/image'
import Button from "@/components/button/Button"
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="khfu" className={styles.img} />
        <div className={styles.imgText} >
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>We are a dedicated team of skilled developers, passionately crafting websites that not only meet our users' needs but also provide them with unforgettable and distinctive online experiences. With a commitment to innovation and user-centric design, we strive to exceed expectations and empower our clients with websites that stand out in today's digital landscape. Our mission is to blend cutting-edge technology with creative expertise to deliver tailor-made solutions, ensuring that every user interaction is both seamless and remarkable. </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          we go beyond just websites; we develop products that cater to our users unique requirements, such as empowering them to effortlessly create and manage blogs. Whether it's building a robust e-commerce platform, designing a captivating blog management system, or enhancing the user interface of an existing site, our team is here to transform your web presence into an unforgettable journey. 
              -Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About