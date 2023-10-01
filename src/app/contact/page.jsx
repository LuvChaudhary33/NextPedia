/* eslint-disable react/no-unescaped-entities */
import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/button/Button"
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea className={styles.textarea} placeholder="Message" cols="30" rows="10" />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact