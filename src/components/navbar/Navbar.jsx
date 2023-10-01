"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'
const Navbar = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo} >NextPedia.</Link>
        <div className={styles.links}>
            <DarkModeToggle />
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/dashboard">Dashboard</Link>

            {session.status==="authenticated" && <button className={styles.logout} onClick={signOut}>Logout</button>}
        </div>
    </div>
  )
}

export default Navbar