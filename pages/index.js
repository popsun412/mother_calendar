import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calendar from './calendar'

export default function Home() {
  return (
    <>
      <Calendar />
    </>
  )
}
