"use client"
import { signIn, useSession } from 'next-auth/react'
import styles from "./page.module.css"
import React from 'react'
import Link from 'next/link'
import {BsGoogle} from "react-icons/bs"
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession()
  const router = useRouter()
  if(session.status ==="loading"){
    return <p>Loading...</p>;
  }
  if(session.status ==="authenticated"){
    return router?.push("/dashboard")
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {email, password})
  }

  return (
      <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" className={styles.input} required /> 
        <input type="password" placeholder="Password" className={styles.input} required /> 
        <button className={styles.button}>Login</button>
      </form>
      {/* {err && "Something went wrong!"} */}
      <Link className={styles.link} href="/dashboard/register">Register a new account?</Link>
      <button className={styles.google} onClick={() =>signIn("google")}><BsGoogle style={{"fontSize": "1.5rem"}}/><p>Login with Google</p></button>
    </div>
  )
}

export default Login